import { getCryptoPrice, getTopCoins, getStockPrice, getTopStocks } from '../repositories/market.repository.js';

export const getCryptoPriceService = async (coinIds) => {
    const data = await getCryptoPrice(coinIds);

    const result = coinIds.map((id) => {
        const coin = data[id];

        if (!coin) return `No se encontraron datos para: ${id}`;

        const change = coin.usd_24h_change?.toFixed(2) ?? 'N/A';
        const direction = coin.usd_24h_change > 0 ? '📈' : '📉';

        return `${id.toUpperCase()}: $${coin.usd} USD (${direction} ${change}% en las últimas 24hs)`;
    });

    return result.join('\n');
};


export const getTopCoinsService = async (limit = 10) => {
    const data = await getTopCoins(limit);

    const result = data.map((coin) => {
        const change = coin.price_change_percentage_24h?.toFixed(2) ?? 'N/A';
        const direction = coin.price_change_percentage_24h > 0 ? '📈' : '📉';

        return `${coin.name} (${coin.symbol.toUpperCase()}): $${coin.current_price} USD | Market Cap: $${coin.market_cap.toLocaleString()} | ${direction} ${change}% en las últimas 24hs`;
    });

    return `Top ${limit} criptomonedas por market cap:\n` + result.join('\n');
};



export const getStockPriceService = async (symbol) => {
    const data = await getStockPrice(symbol);

    if (!data || !data['01. symbol']) {
        return `No se encontraron datos para el símbolo: ${symbol}`;
    }

    const change = parseFloat(data['10. change percent']).toFixed(2);
    const direction = parseFloat(data['10. change percent']) > 0 ? '📈' : '📉';

    return `${data['01. symbol']}: $${data['05. price']} USD (${direction} ${change}% en las últimas 24hs)`;
};

export const getTopStocksService = async () => {
    const data = await getTopStocks();

    const result = data.map((stock) => {
        const change = parseFloat(stock['10. change percent']).toFixed(2);
        const direction = parseFloat(stock['10. change percent']) > 0 ? '📈' : '📉';

        return `${stock['01. symbol']}: $${stock['05. price']} USD (${direction} ${change}% en las últimas 24hs)`;
    });

    return `Principales acciones del mercado:\n` + result.join('\n');
};