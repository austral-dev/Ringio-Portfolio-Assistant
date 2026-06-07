import axios from 'axios';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCryptoPrice = async (coinIds) => {
    const response = await axios.get(`${COINGECKO_BASE_URL}/simple/price`, {
        params: {
            ids: coinIds.join(','),
            vs_currencies: 'usd',
            include_24hr_change: true,
        }
    });

    return response.data;
};

export const getTopCoins = async (limit = 10) => {
    const response = await axios.get(`${COINGECKO_BASE_URL}/coins/markets`, {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: limit,
            page: 1,
            sparkline: false,
        }
    });

    return response.data;
};