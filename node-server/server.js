const express = require("express");
const bodyParser = require("body-parser");
const accounts_controller = require("./controllers/accounts_controller.js");
const Sequelize = require("sequelize");

const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config');

const Models = require("./models/");

// const http = require('http');

const app = express();

const port = 8001;

app.use(session({secret: config.secret}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log("Logged In: ", profile);
    //DO DATABASE STUFF HERE
    //Use profile.id to find user
        //if user -> done
        //else create user
            // -> done
    return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: '/me', failureRedirect: '/login'}));

passport.serializeUser(function(user,done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.get('/me', function(req, res){
    res.send(req.user);
});

app.use(bodyParser.json());




app.get("/accounts", accounts_controller.index);
app.post("/accounts", accounts_controller.create);



// const accounts = [
//     {
//         name: '1234'
//     }
// ];

// const requestHandler = (request, response) => {  
//     response.end(JSON.stringify(accounts));
// }

// const server = http.createServer(requestHandler)






Models.sequelize.sync().then(() => {
  app.listen( port, () => { 
    console.log(`Server listening on port ${port}.`); } )
});
