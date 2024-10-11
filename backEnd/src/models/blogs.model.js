import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        lawyerFullName: {
            type: String,
            required: true,
        },
        lawyerEmail: {
            type: String,
            required: true,
        },
        blogTitle: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
