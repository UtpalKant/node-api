const { getUsers, setUsers } = require('./user.service');

module.exports = {
    async getUsers(req, res, next){
        try{
            let users = await getUsers();
            res.status(200).send(users);
        } catch(err){
            res.status(500).send('Internal Server error: '+err);
        }
    },

    async setUsers(req, res, next){
        try{
            let users = await setUsers();
            res.status(200).send(users);
        } catch(err){
            res.status(500).send('Internal Server error: '+err);
        }
    }
}