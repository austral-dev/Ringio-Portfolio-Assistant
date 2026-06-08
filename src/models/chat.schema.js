import mongoose from "mongoose";
const { Schema } = mongoose;

const chatSchema = new Schema({
    prompt: String,
    answer: String,
    marketData: [{ type: String }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Chat = mongoose.model("Chat", chatSchema);