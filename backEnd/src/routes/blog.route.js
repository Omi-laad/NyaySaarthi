import express from 'express';
import {
    createBlog,
    getBlogById,
    getBlogs,
    //   getBlogs,
    //   getBlogById,
    //   updateBlog,
    //   deleteBlog,
} from '../controllers/blog.controller.js';
import { verifyJWT } from "../middlewares/lawyerAuth.middlerware.js"

const router = express.Router();

// router.route('/').get(getBlogs).post(protect, createBlog);
// router
//     .route('/:id')
//     .get(getBlogById)
//     .put(protect, updateBlog)
//     .delete(protect, deleteBlog);


router.route('/createblog').post(verifyJWT, createBlog)
router.route('/getBlogsById/:id').get(getBlogById)
router.route('/getAllBlogs').get(getBlogs)

export default router;
