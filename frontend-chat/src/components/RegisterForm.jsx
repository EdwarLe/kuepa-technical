import { useState } from 'react';
import { registerUser } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [isRegisteredSuccessfully, setIsRegisteredSuccessfully] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await registerUser({ username, password, role });
        setIsRegisteredSuccessfully(true)
        setTimeout(() => {
            navigate('/login')
        }, 2000);
        // alert('User registered successfully');
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
        <select
        className='p-3 border border-slate-200 rounded-lg w-full outline-indigo-500'
        value={role}
        onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="moderator">Moderator</option>
        </select>
        <button
        className='bg-indigo-500 p-2 px-6 text-white font-bold rounded-lg border border-transparent hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 transition-colors'
        type="submit">Register</button>
        {
            isRegisteredSuccessfully
            ? <p className='p-1 bg-green-400 w-full text-center text-white'>User registered successfully!</p>
            : <p className='p-1 bg-indigo-400 w-full text-center text-white'>Register and Enjoy the Chat!</p>
        }
    </form>
    );
};

export default RegisterForm;
