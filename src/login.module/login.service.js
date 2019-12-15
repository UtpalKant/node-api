const { getUsers, setUsers } = require('./login.repository');

module.exports = {
    getUsers(username, password){
        return getUsers(username, password);
    },

    setUsers(email, username, password){
        return setUsers(email, username, password);
    }
}