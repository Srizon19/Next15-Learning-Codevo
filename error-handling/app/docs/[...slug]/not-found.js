"use client";

import { usePathname } from "next/navigation";
export default function NotFound() {
    const pathname = usePathname();
    const category = pathname.split("/")[2];
    const subCategory = pathname.split("/")[3];
    console.log("Not Found Pathname:", pathname);
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            {category && <p>Category: {category}</p>}
            {subCategory && <p>Subcategory: {subCategory}</p>}
            <p>Please check the URL or return to the home page.</p>
        </div>
    );
}