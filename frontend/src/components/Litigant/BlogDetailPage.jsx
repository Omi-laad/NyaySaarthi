import React from 'react';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogDetailPage = () => {
    // In a real application, you would fetch the blog post data based on the id
    const { id } = useParams();

    // This is mock data. Replace this with actual data fetching logic
    const blogPost = {
        title: "Understanding Property Laws in India",
        author: "Adv. Priya Sharma",
        date: "May 15, 2023",
        content: `
      <p>Property laws in India are complex and multifaceted, varying across different states and union territories. This article aims to provide a comprehensive overview of the key aspects of property laws that every Indian citizen should be aware of.</p>
      
      <h2>Types of Property Ownership</h2>
      <p>In India, property ownership can be broadly categorized into:</p>
      <ul>
        <li>Individual Ownership</li>
        <li>Joint Ownership</li>
        <li>Cooperative Ownership</li>
      </ul>

      <h2>Transfer of Property</h2>
      <p>The Transfer of Property Act, 1882 governs the transfer of property in India. It outlines various modes of property transfer, including sale, mortgage, lease, and gift.</p>

      <h2>Registration of Property</h2>
      <p>Under the Registration Act, 1908, it is mandatory to register any property transaction where the value exceeds Rs. 100. This includes sale deeds, gift deeds, and lease agreements for a period exceeding one year.</p>

      <h2>Inheritance Laws</h2>
      <p>Inheritance laws in India vary based on religion. The Hindu Succession Act, 1956 (amended in 2005) governs inheritance for Hindus, while Muslims follow Islamic law. Other communities are governed by the Indian Succession Act, 1925.</p>

      <h2>Conclusion</h2>
      <p>Understanding property laws is crucial for protecting your rights and making informed decisions. Always consult with a qualified legal professional for specific advice related to property matters.</p>
    `,
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <Link to="/litigant-dashboard" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
                <ArrowLeft className="mr-2" />
                Back to Dashboard
            </Link>

            <article className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-orange-600 mb-4">{blogPost.title}</h1>

                <div className="flex items-center text-gray-600 mb-6">
                    <User className="mr-2" />
                    <span className="mr-4">{blogPost.author}</span>
                    <Clock className="mr-2" />
                    <span>{blogPost.date}</span>
                </div>

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
            </article>
        </div>
    );
};

export default BlogDetailPage;