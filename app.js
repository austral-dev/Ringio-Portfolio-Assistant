import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { authRouter } from './src/routes/auth.route.js';
import { aiRouter } from './src/routes/ai.route.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('static'));

app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", message: "El servidor está conectado y funciona correctamente.", timestamp: new Date().toISOString()})
})

app.use("/api/v1", authRouter);
app.use("/api/v1", aiRouter);


app.use("/", (request, response) => {
    response.status(404).json({errMsg: "Página no encontrada."})
})

export default app;