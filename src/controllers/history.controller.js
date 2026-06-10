import {
    obtenerHistorialDeUsuario,
    obtenerTodosLosChats,
    obtenerChatPorId,
    eliminarChatPorId,
    eliminarHistorialDeUsuario,
    obtenerUltimosChats
} from "../repositories/mongo.chat.repository.js";

const obtenerHistorialDeUsuarioController = async (request, response) => {
    const { userId } = request.body.user;

    try {
        const historyChats = await obtenerHistorialDeUsuario(userId);

        response.status(200).json({
            ok: true,
            message: `Historial del usuario ${userId} consultado hasta ${Date.now().toLocaleString()}`,
            payload: historyChats,
        });
    } catch (error) {
        return response.status(404).json({
            message: "No se encontró el historial",
            errorMsg: error.message
        });
    }

};

const obtenerTodosLosChatsController = async (request, response) => {
    try {
        const historyChats = await obtenerTodosLosChats();

        response.status(200).json({
        ok: true,
        message: `history requested until ${Date.now().toLocaleString()}`,
        payload: historyChats,
    });
    } catch (error) {
        return response.status(404).json({
            message: "No se encontró el historial",
            errorMsg: error.message
        });
    }
};

const obtenerChatPorIdController = async (request, response) => {
    const { chatId } = request.params;

    try {
        const chat = await obtenerChatPorId(chatId);
        response.status(200).json({
            ok: true,
            payload: chat,
        });
    } catch (error) {
        return response.status(404).json({
            message: "No se encontró el chat",
            errorMsg: error.message
        });
    }

};

const eliminarChatPorIdController = async (request, response) => {
    const { userId } = request.body.user;
    const { chatId } = request.params;

    const chatBorrado = await eliminarChatPorId(userId, chatId);
    if (!chatBorrado) {
        return response.status(404).json({
            message: "No se encontró el chat"
        });
    }
    
    response.status(200).json({
        ok: true,
        message: "Se eliminó el chat",
    });
};

const eliminarHistorialDeUsuarioController = async (request, response) => {
    const { userId } = request.body.user;

    try {
        await eliminarHistorialDeUsuario(userId);
        response.status(200).json({
            ok: true,
            message: "Se eliminó el historial",
        });
    } catch (error) {
        return response.status(404).json({
            message: "No se encontró el historial"
        });
    }

};

const obtenerUltimosChatsController = async (request, response) => {
    const { userId } = request.body.user;

    try {
        const historyChats = await obtenerUltimosChats(userId);
        response.status(200).json({
            ok: true,
            message: `Se obtuvieron los últimos chats`,
            payload: historyChats,
        });
    } catch (error) {
        return response.status(404).json({
            message: "No se encontraron los chats"
        });
    }
    
};

export {
    obtenerHistorialDeUsuarioController,
    obtenerTodosLosChatsController,
    obtenerChatPorIdController,
    eliminarChatPorIdController,
    eliminarHistorialDeUsuarioController,
    obtenerUltimosChatsController
};