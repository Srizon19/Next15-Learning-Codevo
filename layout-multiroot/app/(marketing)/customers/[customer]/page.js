import Link from "next/link";
import {Metadata} from "next";
import { metadata } from "@/app/layout";

export const generateMetadata = async ({params})=>{
    const id = await params.customer;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Customer ${id} Details Page`);
        }, 100); // Simulate async operation
    });
    
    return {
        title,
        description: `Details and revenue information for customer ${id}.`,
}
};


// export const metadata = generateMetadata({params});

export default async function CustomerPage({params}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const customers = await response.json();
    
    const customer = customers.find(c => c.id === parseInt(params.customer, 10));
    if (!customer) {    
        return <div>Customer not found</div>;
    }
    
    customers.forEach(customer => {
        customer.revenue = Math.floor(Math.random() * 10000); // Assign random revenue
    });

    return (
        <main>
            <h1>Customers (with Revenue)</h1>
            
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
                <p style={{ margin: 0 }}>Email: {customer.email}</p>
                <p style={{ margin: 0 }}>Revenue: ${customer.revenue}</p>
            </div>
        </main>
    );
}