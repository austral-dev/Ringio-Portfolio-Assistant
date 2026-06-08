import { connect } from "mongoose";
import { config } from "../config/config.js";

export const conectarConMongoDb = async () => {
    try {
        await connect(config.mongodbUri);
        console.log("Conexión con MongoDB establecida");
    } catch (error) {
        console.error("Error al conectar con MongoDB", error);
    }
};