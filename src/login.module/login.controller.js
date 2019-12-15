const { getUsers, setUsers } = require('./login.service');

module.exports = {

    /**
     * @description: fetches all users.
     */
    async getUsers(req, res, next){
        try{
            let token = await getUsers(req.query.username, req.query.password);
            res.cookie('token', token[0].auth_token, { httpOnly: true });
            res.status(200).send(...token);
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
            let users = await setUsers(req.body);
            res.status(200).send(users);
        } catch(err){
            res.status(500).send('Internal Server error: '+err);
        }
    },

    testapi(req, res, next){
        console.log(req.cookie.token);
        res.status(200);
    }
}