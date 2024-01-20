require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./keys');

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      // clientID: keys.google.clientID,
      // clientSecret: keys.google.clientSecret,
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log('passport callback function fired:');
      console.log(profile);
    }
  )
);