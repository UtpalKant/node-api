const { getUsers, setUsers } = require('./login.service');

module.exports = {

    /**
     * @description: fetches all users.
     */
    async getUsers(req, res, next){
        try{
            let users = await getUsers(req.query.username, req.query.password);
            res.status(200).send(users);
        } catch(err){
            res.status(500).send('Internal Server error: '+err);
        }
    },

    /**
     * @description: sets up a user.
     */
    async setUsers(req, res, next){
        try{
            console.log(req.body);
            let users = await setUsers(req.body.email, req.body.username, req.body.password);
            res.status(200).send(users);
        } catch(err){
            res.status(500).send('Internal Server error: '+err);
        }
    }
}