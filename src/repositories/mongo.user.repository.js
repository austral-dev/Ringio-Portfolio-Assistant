import {User} from '../models/users.schema.js';

export const obtenerTodosLosUsuarios = async () => {
    const usuarios = await User.find();
    return usuarios;
}

export const obtenerUsuarioPorId = async (userId) => {
    const usuario = await User.findById(userId);
    return usuario;
}

export const actualizarUsuario = async (userId, nuevosDatos) => {
    const usuarioActualizado = await User.findByIdAndUpdate(userId, nuevosDatos, { new: true });
    return usuarioActualizado;
}

export const eliminarUsuarioPorId = async (userId) => {
    const borrado = await User.findByIdAndDelete(userId);
    return borrado != null;
}

export const obtenerUsuarioConChats = async (userId) => {
    const chats = await Chat.find({ user: userId }).populate('user');
    return chats;
}