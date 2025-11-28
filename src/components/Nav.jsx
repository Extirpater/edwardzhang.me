import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <NavLink to="/" className="brand" style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400, letterSpacing: '0px', color: 'var(--text-main)', textDecoration: 'none', textTransform: 'uppercase' }}>
                Edward B. Zhang
            </NavLink>

            <div className="header-links" style={{ textAlign: 'right', fontFamily: "'Space Mono', monospace", fontSize: '12px', color: 'var(--text-muted)' }}>
                <div style={{ marginBottom: '12px', color: '#aaa', opacity: 0.8, fontWeight: 600, letterSpacing: '1px', fontSize: '11px', fontFamily: "'Space Mono', monospace" }}>ELSEWHERE</div>
                <NavLink to="/about" style={{ display: 'block', marginBottom: '4px', textDecoration: 'none', color: 'var(--text-muted)', transition: 'color 0.2s', fontFamily: "'Space Mono', monospace" }}>
                    ABOUT
                </NavLink>
                <NavLink to="/blog" style={{ display: 'block', marginBottom: '4px', textDecoration: 'none', color: 'var(--text-muted)', transition: 'color 0.2s', fontFamily: "'Space Mono', monospace" }}>
                    BLOG
                </NavLink>
                <NavLink to="/contact" style={{ display: 'block', marginBottom: '4px', textDecoration: 'none', color: 'var(--text-muted)', transition: 'color 0.2s', fontFamily: "'Space Mono', monospace" }}>
                    CONTACT
                </NavLink>
            </div>
        </header>
    )
}

export default Nav