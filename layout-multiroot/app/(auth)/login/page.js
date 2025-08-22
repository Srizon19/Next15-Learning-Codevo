"use client";
import { useState } from "react";



export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        // Dummy login logic (replace with real API call)
        if (email === "user@example.com" && password === "password123") {
            alert("Login successful!");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ width: "100%", padding: 8, marginTop: 4 ,
                        border: "1px solid #ccc", borderRadius: 4
                            
                        }}
                        
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", padding: 8, marginTop: 4, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
                {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
                <button type="submit" style={{ width: "100%", padding: 10, background: "#0070f3", color: "#fff", border: "none", borderRadius: 4 }}>
                    Login
                </button>
            </form>
        </div>
    );
}