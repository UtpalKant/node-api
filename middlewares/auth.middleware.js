module.exports = {
    authenticate(req, res, next) {
        req.cookie();
        next();
    }
}