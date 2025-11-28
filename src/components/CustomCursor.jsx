import { useEffect } from 'react';

function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        if (!cursor) return;

        const handleMouseMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const handleLinkEnter = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.opacity = '0.5';
        };

        const handleLinkLeave = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '1';
        };

        document.addEventListener('mousemove', handleMouseMove);

        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkEnter);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkEnter);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    return <div id="custom-cursor" className="custom-cursor" />;
}

export default CustomCursor;

