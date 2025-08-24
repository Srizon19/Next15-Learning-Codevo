import React from "react";
import Link from "next/link";

// Dummy customer data associated with revenue


export default async function CustomersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const customers = await response.json();
    
    customers.forEach(customer => {
        customer.revenue = Math.floor(Math.random() * 10000); // Assign random revenue
    });
    
    return (
        <main>
            <h1>Customers (with Revenue)</h1>
            {
                customers.map((customer) => (
                    <Link key={customer.id} href={`/customers/${customer.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
                    <div
                       
                        style={{
                            border: "1px solid #e0e0e0",
                            borderRadius: "8px",
                            padding: "16px",
                            marginBottom: "16px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            background: "#fff",
                            maxWidth: "400px"
                        }}
                    >
                        <h2 style={{ margin: "0 0 8px 0" }}>{customer.name}</h2>
                        <p style={{ margin: 0 }}>Revenue: ${customer.revenue}</p>
                    </div></Link>
                ))
            }
        </main>
    );
}