import { sendMessageToAI } from '../repositories/ai.repository.js';
import { getTopCoinsService } from './market.service.js';

export const chatWithAI = async (userMessage) => {
    const marketContext = await getTopCoinsService(10);
    const response = await sendMessageToAI(userMessage, marketContext);
    return response;
};