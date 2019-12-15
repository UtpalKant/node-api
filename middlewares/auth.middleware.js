module.exports = {
    // called while request comes.
    validateAndRenewToken(req, res, next) {
        console.log('validated token.');
        console.log('setting up a new token.');
        next();
    }
}