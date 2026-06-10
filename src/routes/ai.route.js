import { Router } from 'express';
import { chat } from '../controllers/ai.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


export const aiRouter = Router();

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Enviar un mensaje al asistente de IA
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChatRequest'
 *     responses:
 *       200:
 *         description: Respuesta del asistente de IA generada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChatResponse'
 *       400:
 *         description: El mensaje no puede estar vacío
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: No autorizado (token inválido o ausente)
 *       500:
 *         description: Error interno al procesar el mensaje
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
aiRouter.post('/chat', authMiddleware, chat);