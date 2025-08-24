import NavLayout from './navLayout';
import React from 'react';

export const metadata = {
    title: "Marketing Layout",
    description: "This is the marketing layout for the application.",
};

export default function MarketingLayout({ children }) {
    return (
        <div className="marketing-layout">
            <header className="marketing-header">
                <NavLayout></NavLayout>
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