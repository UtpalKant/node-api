const mongoose = require('mongoose');
const User = mongoose.model('../../orm-models/user.entity');

module.exports = {
    getUsers(){
        return User.find();
    },

    setUsers(email, userName, password){
        let user = new User({
            id: new mongoose.Types.ObjectId(),
            userName: userName,
            email: email,
            password: password
        });
        return user.save();
    }
}