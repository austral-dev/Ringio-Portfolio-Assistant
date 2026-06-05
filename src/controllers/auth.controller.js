import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const usuarios = [];

export const register = (request, response) => {
    const { email, password } = request.body;
    
    for (const usuario of usuarios) {
        if (usuario.email === email) {
            return response.status(400).json({ msg: "El usuario ingresado ya está registrado" });
        }
    }
    usuarios.push({ email, password });
    return response.status(201).json({ msg: "Usuario registrado con éxito" });
};

export const login = (request, response) => {
    const { email, password } = request.body;
    
    const usuario = usuarios.find((u) => u.email === email);
    if (!usuario) {
        return response.status(401).json({ msg: "Usuario no autorizado" });
    }

    if (usuario.password !== password) {
        return response.status(401).json({ msg: "Contraseña incorrecta" });
    } else {
        const token = jwt.sign({ email: usuario.email }, config.jwtTokenSecret, { expiresIn: config.jwtExpires });
        return response.status(200).json({ token });
    }
};