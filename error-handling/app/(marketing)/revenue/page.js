import React from "react";

const revenues = [
    { year: 2021, amount: 1200000 },
    { year: 2022, amount: 1500000 },
    { year: 2023, amount: 1800000 },
];

export default function RevenuePage() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Company Revenue Overview</h1>
            <p>Below is the annual revenue for the past years:</p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Year</th>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Revenue (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {revenues.map((rev) => (
                        <tr key={rev.year}>
                            <td style={{ padding: "8px" }}>{rev.year}</td>
                            <td style={{ padding: "8px" }}>${rev.amount.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}