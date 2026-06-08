import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);