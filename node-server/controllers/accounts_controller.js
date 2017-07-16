const Models = require("../models/")

module.exports = {
    index: (req, res, next) => {
        Models.account.findAll().then( (accounts) => {
            res.status(200).send(accounts)
        })
    },
    create: (req, res, next) => {
        for(var i in req.body) {
            Models.account.findOrCreate(
                {
                where: { accountNumber: req.body[i].account_number }, 
                defaults: {
                    ssn: req.body[i].ssn,
                    branch: req.body[i].branch,
                    employee: req.body[i].employee,
                    accountOpenDate: req.body[i].account_open_date
                }
                }
            ).spread( (account, created) => {
                console.log(i);
                if(created) {
                    console.log(created)
                } else {
                    Models.exception.create(
                        {
                            reason: "DUPLICATE",
                            accountNumber: req.body[i].account_number,
                            ssn: req.body[i].ssn,
                            branch: req.body[i].branch,
                            employee: req.body[i].employee,
                            accountOpenDate: req.body[i].account_open_date
                        }
                    ).then( (exception) => {
                        
                    } )
                }
            } )
            console.log(req.body[i].account_number);
        }
        res.status(200).send("ok");
    }
}
