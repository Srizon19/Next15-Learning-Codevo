"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const NavLayout = () => {
    const pathname = usePathname();




    return (
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <Link href="/">Home</Link>
            <Link href="/revenue" className={(pathname.startsWith("/revenue") ? "font-bold underline" : "")}>Revenue</Link>

            <Link href="/customers" className={(pathname.startsWith("/customers") ? "font-bold underline" : "")}>
                Customers
            </Link>
        </nav>
    )
}

export default NavLayout
