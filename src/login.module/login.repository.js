const mongoose = require('mongoose');
const User = require('../../orm-models/user.entity');

module.exports = {
    getUsers(user){
        return User.find(user);
    },

    setUsers(userData){
        let user = new User({
            id: new mongoose.Types.ObjectId(),
            username: userData.username,
            email: userData.email,
            password: userData.password,
            firstname: userData.firstname,
            lastname: userData.lastname
        });
        return user.save();
    }
}