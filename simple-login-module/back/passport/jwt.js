require('dotenv').config();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const { User } = require('../models');

// 옵션
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  ignoreExpiration: false,
}

module.exports = () => {
  passport.use(new JWTStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findOne({ where: { id: jwtPayload.id } });
      console.log("jwt strategy : ",user);
      if (user) {
        return done(null, user);
      }
      return done(null, false, { reason: '인증 실패' });
    } catch (error) {
      console.error(error);
      return done(error);
    }
  }));
};