import {User} from '../models/users.schema.js';
import { Chat } from '../models/chat.schema.js';

export const crearChat = async (userId, prompt, answer, marketData = []) => {
    const usuario = await User.findById(userId);
    if (!usuario) {
        throw new Error("Usuario no encontrado");
    }
    await Chat.create({
        prompt,
        answer,
        marketData,
        user: usuario._id,
    });
}

export const obtenerHistorialDeUsuario = async (userId) => {
    const chats = await Chat.find({ user: userId });
    return chats;
}

export const obtenerTodosLosChats = async () => {
    const chats = await Chat.find();
    return chats;
}

export const obtenerChatPorId = async (chatId) => {
    const chat = await Chat.findById(chatId);
    return chat;
}

export const eliminarChatPorId = async (userId, chatId) => {
    const borrado = await Chat.deleteOne({ _id: chatId, user: userId });
    return borrado.deletedCount > 0;
}

export const eliminarHistorialDeUsuario = async (userId) => {
    const borrado = await Chat.deleteMany({ user: userId });
    return borrado.deletedCount > 0;
}

export const obtenerUltimosChats = async (userId) => {
    const chats = await Chat.find({ user: userId }).sort({ createdAt: -1 }).limit(5);
    return chats;
}