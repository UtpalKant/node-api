const Token = require('../../orm-models/token.entity');

module.exports = {

    getTokenByToken(token) {
        return Token.find({ 'auth_token': token });
    },

    getTokenByUser({username, email}){
        return Token.find({username: username, email: email});
    },

    setToken(token) {
        let newToken = new Token({
            username: token.username,
            email: token.email,
            firstname: token.firstname,
            lastname: token.lastname,
            auth_token: token.auth_token,
            issued: token.issued,
        });
        return newToken.save();
    },

    updateToken(token, updatedToken) {
        return Contact.update({ 'auth_token': token }, { $set: { 'auth_token': updatedToken } });
    }
}