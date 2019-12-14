const mongoose = require('mongoose');

const User = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', User);