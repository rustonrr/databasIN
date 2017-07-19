const Models = require("../models/")

module.exports = {
    index: (req, res, next) => {
        Models.exception.findAll().then( (exceptions) => {
            res.status(200).send(exceptions)
        })
    }
}