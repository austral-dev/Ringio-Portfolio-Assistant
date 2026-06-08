import './src/config/env.js';
import app from './app.js';
import { conectarConMongoDb } from './src/databases/mongo.conection.js';

const PORT = process.env.PORT || 1337;

app.listen(PORT, async () => {
    await conectarConMongoDb();
    console.log(`El servidor está funcionando en esta ruta: http://localhost:${PORT}`)
})