const mongoose = require('mongoose');
const User = require('../../orm-models/user');

module.exports = {
    getUsers(){
        return User.find();
    },

    setUsers(){
        let user = new User({
            id: new mongoose.Types.ObjectId(),
            fname: 'Utpal',
            lname: 'Kant',
            roll: 59,
            dob: Date.now()
        });

        return user.save();
    }
}