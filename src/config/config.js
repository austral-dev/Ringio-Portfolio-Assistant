export const config = {
    jwtTokenSecret: process.env.JWT_TOKEN_SECRET,
    jwtExpires: process.env.JWT_EXPIRES,
    geminiApiKey: process.env.GEMINI_API_KEY,
    alphaVantageApiKey: process.env.ALPHA_VANTAGE_API_KEY,
    topStocks: process.env.TOP_STOCKS?.split(',') ?? [],

}