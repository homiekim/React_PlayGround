const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./middleware");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const token = req.cookies.RefreshToken;
    if (token) {
      const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
      const userInfo = await User.findOne({
        where: { id: decoded.id },
        attributes: {
          exclude: ["password"],
        },
      });
      console.log(userInfo);
      res.status(200).json(userInfo);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

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
      console.log("user : ", user);
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1m",
      });
      const refresh_token = jwt.sign(
        { id: user.id },
        process.env.REFRESH_SECRET
      );
      res.cookie("RefreshToken", refresh_token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14,
      });
      const userInfo = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json({ access_token , userInfo});
    });
  })(req, res, next);
});

router.post("/refresh", verifyToken, async (req, res) => {
  const token = req.cookies.RefreshToken;
  const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
  const user = await User.findOne({ where: { id: decoded.id } });
  const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1m",
  });
  return res.status(200).json({ access_token });
});

router.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.status(200).json({ message: "인증 성공" });
  }
);
module.exports = router;
