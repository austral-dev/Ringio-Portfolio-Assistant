import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { User } from '../models/users.schema.js';

export const register = async (request, response) => {
    const { email, password } = request.body;
    
    const usuario = await User.findOne({ email: email });
        if (usuario != null) {
            return response.status(400).json({ msg: "El usuario ingresado ya está registrado" });
        }
    await User.create({ email, password });
    return response.status(201).json({ msg: "Usuario registrado con éxito" });
};

export const login = async (request, response) => {
    const { email, password } = request.body;
    
    const usuario = await User.findOne({ email: email });
    if (usuario == null) {
        return response.status(401).json({ msg: "Usuario no autorizado" });
    }

    if (usuario.password !== password) {
        return response.status(401).json({ msg: "Contraseña incorrecta" });
    } else {
        const token = jwt.sign({_id: usuario._id}, config.jwtTokenSecret, { expiresIn: config.jwtExpires });
        return response.status(200).json({ token });
    }
};