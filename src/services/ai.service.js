import { sendMessageToAI } from '../repositories/ai.repository.js';
import { getTopCoinsService, getTopStocksService } from './market.service.js';

export const chatWithAI = async (userMessage) => {
    const [cryptoContext, stocksContext] = await Promise.all([
        getTopCoinsService(10),
        getTopStocksService(),
    ]);

    const context = `
${cryptoContext}

${stocksContext}
    `;

    const response = await sendMessageToAI(userMessage, context);
    return response;
};