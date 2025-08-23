"use client"
import React from 'react';
import Link from 'next/link';


// export const metadata = {
//     title: "Auth Layout",
//     description: "Layout for authentication pages",
// };


export default function AuthLayout({ children }) {
    const [value, setValue] = React.useState("");
    return (
        <div>
            <h1 className='font-bold'>This is layout</h1>
            <input
                type="text"
                placeholder="Type something..."
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            ></input>
            {/* keep the children inside a div and border and padding them */}
            <div style={{ border: '2px solid #000', padding: '20px', margin: '20px' }}>
                {children}
            </div>    
        </div>
    );
}