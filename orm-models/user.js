const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    fname: String,
    lname: String,
    roll: Number,
    dob: Date
});

module.exports = mongoose.model('User', userSchema);