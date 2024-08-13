import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = await loginUser({ username, password });
        login(token);
        setUser(token.user)
        navigate('/chat')
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
        <button type="submit">Login</button>
    </form>
    );
};

export default LoginForm;
