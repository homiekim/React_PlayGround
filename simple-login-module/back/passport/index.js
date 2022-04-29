const passport = require('passport');
const { User } = require('../models');
const jwt = require('./jwt');
const local = require('./local');


module.exports = () => {
 local();
 jwt(); 
}