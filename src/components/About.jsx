import React from 'react';

function About() {
    const publications = [
        {
            title: 'Bonsai: A Small Ternary-Weight Language Model',
            source: 'deepgrove',
            fileUrl: 'https://github.com/deepgrove-ai/Bonsai'
        }
    ];

    const projects = [
        {
            title: 'Quantum Generative Adversarial Network in Photonics',
            source: '3rd Place at MIT Quantum Hackathon iQuHack 2024',
            fileUrl: 'https://github.com/pranavkrishnasuresh/Photonic-Quantum-GAN'
        },
        {
            title: '.406 Ventures Fellow',
            source: '',
            fileUrl: null
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="container">
                <div>
                    {/* Publications */}
                    <section style={{ marginBottom: '60px' }}>
                        <h2>Publications</h2>
                        <ul className="entry-list">
                            {publications.map((pub, index) => (
                                <li key={index} className="entry">
                                    <span className="entry-num">{String(index + 1).padStart(2, '0')}</span>
                                    <div className="entry-content">
                                        <strong>{pub.title}</strong>
                                        {pub.source && (
                                            <>
                                                <br />
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{pub.source}</span>
                                            </>
                                        )}
                                        {pub.fileUrl && (
                                            <>
                                                <br />
                                                <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                                                    View Repository
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Projects & Achievements */}
                    <section style={{ marginBottom: '60px' }}>
                        <h2>Projects & Achievements</h2>
                        <ul className="entry-list">
                            {projects.map((project, index) => (
                                <li key={index} className="entry">
                                    <span className="entry-num">{String(index + 1).padStart(2, '0')}</span>
                                    <div className="entry-content">
                                        <strong>{project.title}</strong>
                                        {project.source && (
                                            <>
                                                <br />
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{project.source}</span>
                                            </>
                                        )}
                                        {project.fileUrl && (
                                            <>
                                                <br />
                                                <a href={project.fileUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                                                    View Project
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
