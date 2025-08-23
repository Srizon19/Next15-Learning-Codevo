"use client";
import Link from 'next/link';
import React from 'react'

const navLinks = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
    { href: '/forgot-pass', label: 'Forgot Password' }
];


const navLayout = () => {
    const [input, setInput] = React.useState('');

    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: '#0070f3' }}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default navLayout