const guid = require('uuid/v1');
const { setToken, getToken, updateToken } = require('./token.repository');

module.exports = {

    setToken({username, email, firstname, lastname}){
        let tokenData = {
            username: username,
            email: email,
            firstname: firstname,
            lastname: lastname,
            auth_token: guid(),
            issued: new Date(),
        };
        return setToken(tokenData);
    },

    getToken(token){
        return getToken(token);
    },

    updateToken(token, updatedToken){
        return updateToken(token, updatedToken);
    }
}