import React, { useState, useEffect } from 'react';
import profilePicture from '../assets/PFP2.jpeg'; // Replace with your actual profile picture

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        fetch('/blogPosts.json') // Assuming blogPosts.json is in your public folder
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    const handleToggleExpand = (postId) => {
        setExpandedId(expandedId === postId ? null : postId);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="max-w-4xl mx-auto">
                    {blogPosts.map(post => (
                        <div
                            key={post.id}
                            className="bg-white shadow-lg rounded-lg p-8 mb-4 cursor-pointer"
                            onClick={() => handleToggleExpand(post.id)}
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex-none mr-4">
                                    <img src={profilePicture} alt="Profile" className="w-20 h-20 rounded-full" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold">{post.title}</h2>
                                    <p className="text-gray-600">Published on {post.date}</p>
                                </div>
                            </div>
                            <div
                                className={`transition-all duration-500 ease-in-out ${expandedId === post.id ? 'max-h-screen opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}
                                style={{ maxHeight: expandedId === post.id ? '1000px' : '0' }}
                            >
                                {expandedId === post.id && (
                                    <div className="border-t border-gray-300 pt-4">
                                        <h3 className="text-lg font-bold mb-2">Overview</h3>
                                        <p className="text-gray-600 mb-4">{post.overview}</p>
                                        <h3 className="text-lg font-bold mb-2">Research</h3>
                                        <div className="flex items-start">
                                            <div className="w-5/12 pr-4">
                                                {post.research.map((item, index) => (
                                                    <p key={index} className="text-gray-600 mb-2">{item}</p>
                                                ))}
                                            </div>
                                            <div className="w-2/12 ml-auto">
                                                {post.dates.map((date, index) => (
                                                    <p key={index} className="text-gray-600 mb-2">{date}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">Conclusion</h3>
                                        <p className="text-gray-600">{post.conclusion}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
