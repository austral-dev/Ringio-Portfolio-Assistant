import { Router } from 'express';
import { chat } from '../controllers/ai.controller.js';

export const aiRouter = Router();

aiRouter.post('/chat', chat);