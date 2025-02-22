const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthSchema = new Schema({
    discordId: { type: String, unique: true },
    username: { type: String },
    avatarURL: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
});

module.exports = mongoose.model("AuthSchema", AuthSchema);