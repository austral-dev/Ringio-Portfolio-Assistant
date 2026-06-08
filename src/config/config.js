export const config = {
    jwtTokenSecret: process.env.JWT_TOKEN_SECRET,
    jwtExpires: process.env.JWT_EXPIRES,
    geminiApiKey: process.env.GEMINI_API_KEY,
    mongodbUri: process.env.MONGODB_URI,
}