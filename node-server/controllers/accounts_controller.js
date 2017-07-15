const Models = require("../models/")

module.exports = {
    index: (req, res, next) => {
        Models.account.findAll().then(accounts => {
            res.status(200).send(accounts)
        })
    }
}