// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import blogCover from "../../images/blogCover.webp"

// const BlogPostCard = ({ post }) => {

//     const blogDate = new Date(post.date).toLocaleDateString();

//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
//             <img
//                 src={blogCover || "/api/placeholder/400/250"}
//                 alt={post.blogTitle}
//                 className="w-full h-52 object-fit"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{post.blogTitle}</h3>
//                 <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2 flex-wrap">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     <span className="mr-3">{blogDate}</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     <span>{post.lawyerFullName}</span>
//                 </div>
//                 <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">{post.content}</p>
//                 <Link
//                     to={`/blog/${post._id}`}
//                     className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center text-sm sm:text-base"
//                 >
//                     Read More
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// const BlogPostsSection = () => {
//     const [blogPosts, setBlogPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlogPosts = async () => {
//             try {
//                 const response = await axios.get('/api/v1/lawyerblogs/getAllBlogs');
//                 setBlogPosts(response.data.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch blog posts. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchBlogPosts();
//     }, []);

//     if (loading) {
//         return (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                 {[...Array(3)].map((_, index) => (
//                     <div key={index} className="bg-gray-100 rounded-lg p-4 animate-pulse">
//                         <div className="h-48 bg-gray-200 rounded mb-4"></div>
//                         <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
//                         <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
//                         <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
//                         <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500">{error}</div>;
//     }

//     return (
//         <div className="space-y-6 px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">Lawyer Blog Posts</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                 {blogPosts.map(post => (
//                     <BlogPostCard key={post.id} post={post} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BlogPostsSection;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import blogCover from "../../images/blogCover.webp"

const BlogPostCard = ({ post }) => {
    const blogDate = new Date(post.date).toLocaleDateString();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <img
                src={blogCover || "/api/placeholder/400/250"}
                alt={post.blogTitle}
                className="w-full h-52 object-fit"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">{post.blogTitle}</h3>
                <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2 flex-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mr-3">{blogDate}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Adv.{post.lawyerFullName}</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">{post.content}</p>
                <Link
                    to={`/blog/${post._id}`}
                    className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center text-sm sm:text-base"
                >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

const BlogPostsSection = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('/api/v1/lawyerblogs/getAllBlogs');
                setBlogPosts(response.data.data);
                setFilteredPosts(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch blog posts. Please try again later.');
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const regex = new RegExp(searchTerm, 'i');
            const filtered = blogPosts.filter(post =>
                Object.values(post).some(value =>
                    typeof value === 'string' && regex.test(value)
                )
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(blogPosts);
        }
    }, [searchTerm, blogPosts]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 animate-pulse">
                        <div className="h-48 bg-gray-200 rounded mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="space-y-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">Lawyer Blog Posts</h2>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredPosts.map(post => (
                    <BlogPostCard key={post._id} post={post} />
                ))}
            </div>
            {filteredPosts.length === 0 && (
                <p className="text-center text-gray-500">No blog posts found matching your search.</p>
            )}
        </div>
    );
};

export default BlogPostsSection;