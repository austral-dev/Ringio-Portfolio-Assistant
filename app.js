import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// Más adelante importar routers

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", message: "El servidor está conectado y funciona correctamente.", timestamp: new Date().toISOString()})
})

// Hacer use de los routers

app.use("/", (request, response) => {
    response.status(404).json({errMsg: "Página no encontrada."})
})

export default app;