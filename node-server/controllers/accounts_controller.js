const Models = require("../models/")

module.exports = {
    index: (req, res, next) => {
        Models.account.findAll().then( (accounts) => {
            res.status(200).send(accounts)
        })
    },
    create: (req, res, next) => {
        var accountsCreated = [];
        var exceptionsCreated = [];
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
                
                if(created) {
                    accountsCreated.push(account);
                } else {
                    Models.exception.create(
                        {
                            reason: "DUPLICATE",
                            accountNumber: account.accountNumber,
                            ssn: account.ssn,
                            branch: account.branch,
                            employee: account.employee,
                            accountOpenDate: account.accountOpenDate
                        }
                    ).then( (exception) => {
                        exceptionsCreated.push(exception);
                    } )
                }
            } )
        }
        res.status(200).send(
            {accountsCreated: accountsCreated, exceptionsCreated: exceptionsCreated}
        );
    }
}
