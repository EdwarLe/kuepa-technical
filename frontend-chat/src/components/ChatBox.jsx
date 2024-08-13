import { useState, useEffect, useContext } from 'react';
import { getMessages, sendMessage } from '../services/chatService';
import { AuthContext } from '../context/AuthContext';

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
    <div>
        <h2>Bienvenido {auth.token.user.username}</h2>
        <button onClick={logout}>Cerrar Sesión</button>
        <div className="chat-messages">
        {messages.map((msg, index) => (
            <div key={index}>
            <strong>{msg.user ? msg.user.username : auth.token.user.username}:</strong> {msg.message}
            </div>
        ))}
        </div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
        />
        <button type="submit">Send</button>
        </form>
    </div>
    );
};

export default ChatBox;
