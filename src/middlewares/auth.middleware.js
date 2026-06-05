import {config} from '../config/config.js';
import jwt from 'jsonwebtoken';

export const authMiddleware = (request, response, next) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ msg: "No autorizado" });
    }

    if (!authorization.startsWith("Bearer ")) {
        return response.status(401).json({ msg: "No autorizado" });
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token, config.jwtTokenSecret);
        request.user = decoded;
        next();

    } catch (error) {
        if (error.name === "ErrorTokenVencido") {
            return response.status(401).json({ msg: "El token utilizado ya expiró" });
        }

        if (error.name === "ErrorJWTInválido") {
            return response.status(401).json({ msg: "El token utilizado no es válido" });
        }

        console.error(error);
        return response.status(401).json({ msg: "No autorizado" });
    }
};