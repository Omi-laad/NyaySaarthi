import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import blogCover from "../../images/blogCover.webp"
import { useNavigate } from 'react-router-dom';

const LawyerBlogSection = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/login')
    }
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 text-center mb-12">
                    Legal Insights from Our Experts
                </h2>

                {/* Featured Post */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden sm:flex">
                        <img
                            src={blogCover}
                            alt="Featured blog post"
                            className="w-full sm:w-2/5 object-cover h-64 sm:h-auto"
                        />
                        <div className="p-6 sm:p-8 sm:w-3/5">
                            <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                                Understanding the New Cybercrime Laws: What You Need to Know
                            </h3>
                            <div className="flex items-center text-gray-600 mb-4">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="mr-4">May 15, 2024</span>
                                <User className="w-4 h-4 mr-2" />
                                <span>Adv. Priya Sharma</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                In this comprehensive guide, we break down the recent changes to cybercrime laws and explain how they might affect you and your online activities. Learn about new protections and potential pitfalls in the digital landscape.
                            </p>
                            <a href="/login" className="text-orange-600 font-semibold inline-flex items-center hover:text-orange-700">
                                Read More <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid of Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} {...post} />
                    ))}

                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button onClick={handleNavigate} className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300">
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    );
};

const BlogPostCard = ({ title, date, author, excerpt }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
            src={blogCover}
            alt={title}
            className="w-full h-48 object-fit"
        />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">{title}</h3>
            <div className="flex items-center text-gray-600 mb-3 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{date}</span>
                <User className="w-4 h-4 mr-2" />
                <span>{author}</span>
            </div>
            <p className="text-gray-700 mb-4">{excerpt}</p>
            <a href="/login" className="text-orange-600 font-semibold inline-flex items-center hover:text-orange-700">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
            </a>
        </div>
    </div>
);

const blogPosts = [
    {
        title: "5 Common Legal Mistakes Small Businesses Make",
        date: "April 28, 2024",
        author: "Adv. Rajesh Kumar",
        excerpt: "Discover the most frequent legal pitfalls that small businesses encounter and learn how to avoid them to protect your enterprise."
    },
    {
        title: "Navigating Family Law: A Guide to Smooth Divorces",
        date: "April 22, 2024",
        author: "Adv. Anita Desai",
        excerpt: "Understanding the complexities of divorce proceedings can make the process less stressful. Here's what you need to know."
    },
    {
        title: "Intellectual Property Rights in the Digital Age",
        date: "April 15, 2024",
        author: "Adv. Vikram Singh",
        excerpt: "As technology evolves, so do the challenges of protecting intellectual property. Learn about the latest developments in IP law."
    }
];

export default LawyerBlogSection;