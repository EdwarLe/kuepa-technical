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
    <form 
    className='flex flex-col max-w-96 bg-neutral-100 w-full gap-3 p-3 shadow-xl rounded-xl justify-center items-center'
    onSubmit={handleSubmit}>
        <input
        className='p-3 border border-slate-200 rounded-lg w-full outline-indigo-500'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <input
        className='p-3 border border-slate-200 rounded-lg w-full outline-indigo-500'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <button 
        className='bg-indigo-500 p-2 px-6 text-white font-bold rounded-lg border border-transparent hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 transition-colors'
        type="submit">Login</button>
    </form>
    );
};

export default LoginForm;
