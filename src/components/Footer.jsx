import React, { useState, useEffect } from 'react';

function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Los_Angeles' // PST/PDT
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer style={{
            marginTop: '100px',
            paddingTop: '20px',
            borderTop: '1px solid #eee',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: 'var(--text-muted)',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div>Based in SF, CA</div>
            <div>
                It's <span style={{ color: 'var(--accent)' }}>{time}</span> for me.
            </div>
        </footer>
    );
}

export default Footer;

