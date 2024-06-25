import React, { useState } from 'react';
import paper1 from '../assets/Paper1.pdf';
import paper2 from '../assets/Paper2.pdf';
import paper3 from '../assets/Paper3.pdf';

function About() {
    const [isResearchOpen, setIsResearchOpen] = useState(true);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const researchPapers = [
        {
            title: 'GNN Green Ink Imputation for Whole Slide Image Training',
            description: '',
            source: "Dartmouth 2021 QBS Master's Capstone Virtual Conference",
            fileUrl: 0
        },
        {
            title: 'A Real-Time Deep Transfer Learning Model for Facial Mask Detection',
            description: '',
            source: 'IEEE Xplore June 2021 - Integrated Communication, Navigation and Navigation Conference',
            fileUrl: paper1
        },
        {
            title: 'Emerging Trends Part II––Current Applications in Anatomic and Molecular Pathology',
            source: 'Advances in Molecular Pathology 5 (2022) e25–e52',
            fileUrl: paper2
        },
        {
            title: 'Using Deep Learning in Lyme Disease Diagnosis',
            source: "Journal of Student Research (JSR) ​2021",
            fileUrl: paper3
        }
    ];

    const projects = [
        {
            title: 'Quantum Generative Adversarial Network in Photonics',
            description: '',
            source: '3rd Place at MIT Quantum Hackathon iQuHack 2024',
            fileUrl: 'https://github.com/pranavkrishnasuresh/Photonic-Quantum-GAN'
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto pt-24">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <h2
                            className="text-3xl font-bold mb-8 cursor-pointer flex justify-between items-center"
                            onClick={() => setIsResearchOpen(!isResearchOpen)}
                        >
                            Research
                            <i className={`fas ${isResearchOpen ? 'fa-caret-up' : 'fa-caret-down'} ml-2`}></i>
                        </h2>
                        <div
                            className={`transition-all duration-500 ease-in-out ${isResearchOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        >
                            {researchPapers.map((paper, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                                    {paper.source && (
                                        <p className="text-gray-600 mb-4">{paper.source}</p>
                                    )}
                                    <p className="text-gray-700 mb-2">{paper.description}</p>
                                    <a href={paper.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2
                            className="text-3xl font-bold mb-8 cursor-pointer flex justify-between items-center"
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        >
                            Projects
                            <i className={`fas ${isProjectsOpen ? 'fa-caret-up' : 'fa-caret-down'} ml-2`}></i>
                        </h2>
                        <div
                            className={`transition-all duration-500 ease-in-out ${isProjectsOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    {project.source && (
                                        <p className="text-gray-600 mb-4">{project.source}</p>
                                    )}
                                    <p className="text-gray-700 mb-2">{project.description}</p>
                                    <a href={project.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
