import { chatWithAI } from '../services/ai.service.js';
import { crearChat } from '../repositories/mongo.chat.repository.js';

export const chat = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ errMsg: 'El mensaje no puede estar vacío.' });
    }

    try {
        const response = await chatWithAI(message);
        await crearChat(req.user._id, message, response);
        return res.status(200).json({ response });
    } catch (err) {
        console.error('Error al chatear con la IA:', err);
        return res.status(500).json({ errMsg: 'Error al procesar el mensaje.' });
    }
};