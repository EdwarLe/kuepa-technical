import { useState, useEffect, useContext } from 'react';
import { getMessages, sendMessage } from '../services/chatService';
import { AuthContext } from '../context/AuthContext';
import VideoBox from './VideoBox';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { auth, logout } = useContext(AuthContext);

    useEffect(() => {
    const fetchMessages = async () => {
        const data = await getMessages(auth.token.token);
        setMessages(data);
    };
    fetchMessages();
    }, [auth]);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await sendMessage(newMessage, auth.token.token);
    setMessages([...messages, message]);
    setNewMessage('');
    };

    return (
    <div className='flex flex-col gap-3 justify-center max-w-[600px] mx-auto w-full sm:max-w-min'>
        <div className='flex gap-3 justify-between items-center'>
            <h2 className='text-lg'>Welcome {auth.token.user.username}!</h2>
            <button className='bg-indigo-500 p-2 self-end text-white font-bold rounded-lg border border-transparent hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 transition-colors' onClick={logout}>Logout</button>
        </div>
        <div className='flex flex-col gap-3 h-full'>
            <VideoBox />
            <div className='flex flex-col gap-3 h-80'>
                <div className="border border-slate-400 bg-neutral-200 rounded-md p-3 overflow-y-scroll max-h-80 h-full flex flex-col gap-2 divide-y-[1px] divide-slate-400">
                {messages.map((msg) => (
                    <div key={msg.id} className='flex flex-col px-4'>
                        <small className='text-[10px] -mb-2 pt-2'>{msg.user?.role}</small>
                        <strong>{msg.user ? msg.user.username : auth.token.user.username}:</strong>
                        {msg.message}
                    </div>
                ))}
                </div>
                <form
                className='w-full flex flex-col gap-3 justify-center items-center'
                onSubmit={handleSubmit}>
                    <input
                    className='p-3 border border-slate-400 rounded-lg w-full outline-indigo-500'
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        required
                    />
                    <button
                    className='bg-indigo-500 p-2 px-6 text-white font-bold rounded-lg border border-transparent hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500      transition-colors'
                    type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default ChatBox;
