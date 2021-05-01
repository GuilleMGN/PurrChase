const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true }
})

const User = mongoose.model("User", userSchema);

module.exports = User;