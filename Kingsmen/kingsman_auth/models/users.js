const mongoose = require('mongoose');
// SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    messages: [String],
})