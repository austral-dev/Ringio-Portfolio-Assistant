import {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuarioPorId
} from '../repositories/mongo.user.repository.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await obtenerTodosLosUsuarios();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error al obtener todos los usuarios:", error);
        return res.status(500).json({ errMsg: "Error interno del servidor." });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await obtenerUsuarioPorId(id);
        if (!user) {
            return res.status(404).json({ errMsg: "Usuario no encontrado." });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error al obtener usuario por id:", error);
        return res.status(500).json({ errMsg: "Error interno del servidor." });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const nuevosDatos = req.body;
    try {
        const updatedUser = await actualizarUsuario(id, nuevosDatos);
        if (!updatedUser) {
            return res.status(404).json({ errMsg: "Usuario no encontrado." });
        }
        return res.status(200).json({ msg: "Usuario actualizado con éxito", user: updatedUser });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return res.status(500).json({ errMsg: "Error interno del servidor." });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await eliminarUsuarioPorId(id);
        if (!success) {
            return res.status(404).json({ errMsg: "Usuario no encontrado." });
        }
        return res.status(200).json({ msg: "Usuario eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        return res.status(500).json({ errMsg: "Error interno del servidor." });
    }
};
