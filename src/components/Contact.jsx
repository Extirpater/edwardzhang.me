import React from 'react';

function Contact() {
    const links = [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/edwardbzhang/', delay: '0.1s' },
        { name: 'Email', href: 'mailto:edwardbzhang@gmail.com', delay: '0.2s' },
        { name: 'Book a Call', href: 'https://calendly.com/edwardbzhang/30min', delay: '0.3s' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="container">
                <section style={{ marginBottom: '60px' }}>
                    <h2>Contact</h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>Feel free to reach out through any of the following:</p>
                </section>

                <ul className="entry-list">
                    {links.map((link, index) => (
                        <li key={link.name} className="entry">
                            <span className="entry-num">{String(index + 1).padStart(2, '0')}</span>
                            <div className="entry-content">
                                <a
                                    href={link.href}
                                    target={link.name !== 'Email' ? '_blank' : undefined}
                                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="text-link"
                                >
                                    {link.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contact;
