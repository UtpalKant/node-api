const mongoose = require('mongoose');
const User = require('../../orm-models/user.entity');

module.exports = {
    getUsers(username, password){
        return User.find({username: username, password: password});
    },

    setUsers(email, username, password){
        let user = new User({
            id: new mongoose.Types.ObjectId(),
            username: username,
            email: email,
            password: password
        });
        return user.save();
    }
}