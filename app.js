import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { authRouter } from './src/routes/auth.route.js';
import { aiRouter } from './src/routes/ai.route.js';
import { userRouter } from './src/routes/user.route.js';
import { swaggerUi, swaggerSpec } from './src/config/swagger.js';

const app = express();

app.use(cors());
const cspDirectives = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDirectives['upgrade-insecure-requests'];

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...cspDirectives,
            "script-src": ["'self'", "'unsafe-inline'"],
            "img-src": ["'self'", "data:", "validator.swagger.io"],
            "connect-src": ["'self'", "http://localhost:1337", "http://127.0.0.1:1337"],
        },
    },
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('static'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", message: "El servidor está conectado y funciona correctamente.", timestamp: new Date().toISOString()})
})

app.use("/api/v1", authRouter);
app.use("/api/v1", aiRouter);
app.use("/api/v1", userRouter);


app.use("/", (request, response) => {
    response.status(404).json({errMsg: "Página no encontrada."})
})

export default app;