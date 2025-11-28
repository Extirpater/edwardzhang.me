import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container">
                {/* Intro Section */}
                <section style={{ marginBottom: '60px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Building frontier AI that runs on any device. Researching efficient AI, drawn to Ockham's Razor, the lottery ticket hypothesis, and optimal brain damage, concepts that get at the essence of intelligence.
                    </p>
                </section>

                {/* Currently Section */}
                <section style={{ marginBottom: '60px' }}>
                    <h2>Currently</h2>
                    <ul className="entry-list">
                        <li className="entry">
                            <span className="entry-num">01</span>
                            <div className="entry-content">
                                I am co-founder and CEO of <a href="https://deepgrove.ai" target="_blank" rel="noopener noreferrer" className="text-link">DeepGrove</a> (YC S25), working on research and engineering in efficient AI.
                            </div>
                        </li>
                        <li className="entry">
                            <span className="entry-num">02</span>
                            <div className="entry-content">
                                Sometimes I write about research and other things. Other times I think about writing and then remember I have code to write instead.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Previously Section */}
                <section style={{ marginBottom: '60px' }}>
                    <h2>Previously</h2>

                    <p style={{ fontSize: '0.75rem', lineHeight: '1.6', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '16px', opacity: 0.6 }}>
                        (Would've stayed in research, but ran out of compute. Started <a href="https://deepgrove.ai" target="_blank" rel="noopener noreferrer" className="text-link">Deepgrove</a> to fund more experiments. )
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        I was an RA under <a href="https://sites.google.com/site/yangyaoqingcmu/" target="_blank" rel="noopener noreferrer" className="text-link">Yaoqing Yang</a> @ Dartmouth,
                        <a href="https://wang.hms.harvard.edu" target="_blank" rel="noopener noreferrer" className="text-link"> Harvard AI and Robotics Lab</a> <span style={{ fontSize: '0.85em', fontFamily: "'Space Mono', monospace", color: 'var(--text-muted)' }}>(2022–2023)</span>,
                        <a href="https://comp.ophthalmology.uw.edu" target="_blank" rel="noopener noreferrer" className="text-link"> UW-Medicine Computational Ophthalmology Lab</a> <span style={{ fontSize: '0.85em', fontFamily: "'Space Mono', monospace", color: 'var(--text-muted)' }}>(2022–2023)</span>,
                        and <a href="https://www.niaid.nih.gov/clinical-trials/lyme-disease-studies" target="_blank" rel="noopener noreferrer" className="text-link">NIH Lyme Disease Studies Unit</a> <span style={{ fontSize: '0.85em', fontFamily: "'Space Mono', monospace", color: 'var(--text-muted)' }}>(2020–2021)</span>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Home;
