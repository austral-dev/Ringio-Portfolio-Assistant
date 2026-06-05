import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en esta ruta: http://localhost:${PORT}`)
})