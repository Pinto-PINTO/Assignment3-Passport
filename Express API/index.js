
/*
-----------------------------------------
 File: index.js
 Andara Pintuge Pinto - 200574919
 Lathindu Welhenage 200574922
 Date: 17th March 2024
-----------------------------------------
*/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/route');
const InitiateMongoServer = require('./db.js');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./src/models/model');


const app = express();
const PORT = 3000;

// Initialize MongoDB server
InitiateMongoServer();

// Middlewares for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    })
);

// Initialize Passport and use Passport session
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Using routes defined in separate src/routes/route.js
routes(app);

// Default route
app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Your server is running on the port ${PORT}`);
});
