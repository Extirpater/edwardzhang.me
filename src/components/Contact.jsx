import React from 'react';
import profilePicture from '../assets/PFP2.jpeg'; // Replace with your actual profile picture

function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="max-w-xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8 mb-4">
                        <div className="flex items-center mb-4">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold">Contact Me</h2>
                                <p className="text-gray-600">Feel free to reach out to me through any of the following:</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-300 pt-4">
                            <ul className="list-disc list-inside">
                                <li>
                                    <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="mailto:your_email@example.com" className="text-blue-500 hover:underline">Email</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
