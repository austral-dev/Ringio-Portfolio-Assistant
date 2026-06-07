import { chatWithAI } from '../services/ai.service.js';

export const chat = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ errMsg: 'El mensaje no puede estar vacío.' });
    }

    const response = await chatWithAI(message);
    return res.status(200).json({ response });
};