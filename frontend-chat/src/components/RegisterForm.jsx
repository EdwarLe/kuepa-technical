import { useState } from 'react';
import { registerUser } from '../services/authService';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await registerUser({ username, password, role });
        alert('User registered successfully');
    } catch (err) {
        console.error(err);
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="moderator">Moderator</option>
        </select>
        <button type="submit">Register</button>
    </form>
    );
};

export default RegisterForm;
