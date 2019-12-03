const { getUsers, setUsers } = require('./user.repository');

module.exports = {
    getUsers(){
        return getUsers();
    },

    setUsers(){
        return setUsers();
    },
}