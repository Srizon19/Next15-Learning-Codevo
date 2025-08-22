import React from 'react';

export const metadata = {
    title: "Auth Layout",
    description: "Layout for authentication pages",
};

export default function AuthLayout({ children }) {
    return (
        <div>
            <header style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                <h1>Authentication</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}