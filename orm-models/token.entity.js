const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    auth_token: { type: String, required: true, unique: true },
    issued: {type: Date, required: true}
});

module.exports = mongoose.model('Token', tokenSchema);