import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Marketing Layout",
    description: "This is the marketing layout for the application.",
};

export default function MarketingLayout({ children }) {
    return (
        <div className="marketing-layout">
            <header className="marketing-header">
                <nav className='flex justify-between items-center p-4 bg-blue-500 text-white'>
                    {/* Add marketing navigation links here */}
                    <Link href="/">Home</Link>
                    <Link href="/revenue">Revenue</Link>
                    <Link href="/customers">Customers</Link>
                </nav>
            </header>
            <main className="marketing-content">
                {children}
            </main>
            <footer className="marketing-footer">
                {/* Add marketing footer content here */}
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}