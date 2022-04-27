const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(200).json();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, { session: false }, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }
        const token = jwt.sign(
          { id: user.id },
          'jwt-secret-key'
        );
        return res.status(200).json({token});
      })
    })(req, res, next);
});

module.exports = router;
