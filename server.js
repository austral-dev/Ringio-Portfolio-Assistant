import './src/config/env.js';
import app from './app.js';

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en esta ruta: http://localhost:${PORT}`)
})