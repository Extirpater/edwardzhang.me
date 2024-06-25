import React from 'react';
import paper1 from '../assets/Paper1.pdf'; // Replace with your actual profile picture
import paper2 from '../assets/Paper2.pdf'; // Replace with your actual profile picture

function About() {
    // Dummy data for projects, replace with actual data or fetch from API
    const projects = [
        {
            title: 'A Real-Time Deep Transfer Learning Model for Facial Mask Detection',
            description: '',
            source: 'IEEE Xplore June 2021 - Integrated Communication, Navigation and Navigation Conference',
            fileUrl: paper1 // Example URL to your PDF
        },
        {
            title: 'Emerging Trends Part II––Current Applications in Anatomic and Molecular Pathology',
            source: 'Advances in Molecular Pathology 5 (2022) e25–e52',
            fileUrl: paper2 // Example URL to your PDF
        },
        {
            title: 'WIP',
            fileUrl: '/path/to/pdf3.pdf' // Example URL to your PDF
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">My Projects</h2>

                    {/* Mapping through projects to display each as a card */}
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            {project.source && (
                                <p className="text-gray-600 mb-4">{project.source}</p>
                            )}
                            <p className="text-gray-700 mb-2">{project.description}</p>

                            <a href={project.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
