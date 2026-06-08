import { Router } from 'express';
import { chat } from '../controllers/ai.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


export const aiRouter = Router();

aiRouter.post('/chat', authMiddleware, chat);