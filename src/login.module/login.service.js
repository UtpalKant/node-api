const { getUsers, setUsers,  } = require('./login.repository');
const {setToken, getTokenByUser } = require('../token.module/token.service');

module.exports = {
    async getUsers(username, password){
        // find user with username.
        let user = await getUsers({username: username, password: password});
        // find user with email.
        if(!user.length){
            user = await getUsers({email: username, password: password});
        }
        // user doesn't exist.
        if(!user.length){
            throw new Error("your details not present in our db");
        }
        // return token object.
        return getTokenByUser(user[0]);
        
    },

    async setUsers(userData){
        let user = await setUsers(userData);
        return setToken(user);
    }
}