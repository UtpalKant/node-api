const { getUsers, setUsers } = require('./login.repository');

module.exports = {
    getUsers(){
        return getUsers();
    },

    setUsers(email, userName, password){
        return setUsers();
    }
}