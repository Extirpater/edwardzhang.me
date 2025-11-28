import React, { useState, useEffect, useRef } from 'react';

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [visiblePosts, setVisiblePosts] = useState([]);
    const postRefs = useRef([]);

    useEffect(() => {
        fetch('/blogPosts.json')
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisiblePosts((prev) => [...prev, entry.target.dataset.post]);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        postRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            postRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [blogPosts]);

    const handleToggleExpand = (postId) => {
        setExpandedId(expandedId === postId ? null : postId);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container">
                <section style={{ marginBottom: '60px' }}>
                    <h2>Selected Writing</h2>
                    <ul className="entry-list">
                        {blogPosts.map((post, index) => (
                            <li key={post.id} className="entry">
                                <span className="entry-num">{String(index + 1).padStart(2, '0')}</span>
                                <div className="entry-content">
                                    <a href="#" className="text-link" onClick={(e) => { e.preventDefault(); handleToggleExpand(post.id); }}>
                                        {post.title}
                                    </a>
                                    <br />
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{post.date}</span>
                                    {expandedId === post.id && (
                                        <div style={{ marginTop: '16px', fontSize: '21px', lineHeight: '1.6', color: 'var(--text-main)' }}>
                                            <p>{post.overview}</p>
                                            <div style={{ marginTop: '16px' }}>
                                                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                                                    Research Experience
                                                </h3>
                                                <div style={{ marginLeft: '12px' }}>
                                                    {post.research.map((item, idx) => (
                                                        <div key={idx} style={{ marginBottom: '12px' }}>
                                                            <p>{item}</p>
                                                            <span style={{ fontSize: '17px', color: 'var(--text-muted)', fontFamily: "'Space Mono', monospace" }}>
                                                                {post.dates[idx]}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <p style={{ marginTop: '16px' }}>{post.conclusion}</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Blog;

