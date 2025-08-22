

'use client';
import { useState } from 'react';


export default function RegisterPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        // TODO: Replace with your registration API endpoint
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.message || 'Registration failed');
            } else {
                setSuccess('Registration successful! You can now log in.');
                setForm({ name: '', email: '', password: '' });
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4, border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4,   border: "1px solid #ccc", borderRadius: 4 }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: 10 }}>Register</button>
                {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
                {success && <div style={{ color: 'green', marginTop: 12 }}>{success}</div>}
            </form>
        </div>
    );
}