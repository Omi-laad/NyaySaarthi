import asyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import Blog from '../models/blogs.model.js';
import { Lawyer } from '../models/lawyer.model.js';  // Import Lawyer model

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
    const { blogTitle, content, date } = req.body;

    if (!blogTitle || !content) {
        throw new ApiError(400, 'All fields are required');
    }

    const lawyer = await Lawyer.findById(req.lawyer._id); // Get the authenticated lawyer's info

    if (!lawyer) {
        throw new ApiError(401, 'Lawyer not found');
    }

    const blog = new Blog({
        lawyerFullName: lawyer.fullName,
        lawyerEmail: lawyer.email,
        blogTitle,
        content,
        date
    });

    const createdBlog = await blog.save();
    res.status(201).json(new ApiResponse(201, createdBlog, "Blog Created Successfully"));
});


const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    if (!blogs) {
        throw new ApiError(404, 'No blogs found');
    }
    res.json(new ApiResponse(200, blogs, "All blogs Retrived"));
});


const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        throw new ApiError(404, 'Blog not found');
    }

    res.json(new ApiResponse(200, blog, "Retrieved Blogs successfully"));
});


export { createBlog, getBlogById, getBlogs }