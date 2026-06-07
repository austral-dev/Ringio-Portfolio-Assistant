import { getCryptoPrice, getTopCoins } from '../repositories/market.repository.js';

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