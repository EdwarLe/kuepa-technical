import { ChatMessage } from '../models/ChatMessage.js'

export const getMessages = async (req, res) => {
    const messages = await ChatMessage.findAll({ include: 'user' });
    res.json(messages);
};

export const postMessage = async (req, res) => {
    const { message } = req.body;
    const newMessage = await ChatMessage.create({ message, userId: req.user.id });
    res.status(201).json(newMessage);
};


