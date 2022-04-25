const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/signup', async(req,res,next)=> {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      userid: req.body.id,
      nickname: req.body.nickname,
      password: hashedPassword,
    })
    res.status(200).json();
  }catch(error){
    console.error(error);
    next(error);
  }
});

routet.post('/login', async(req,res,next) => {
  
});


module.exports = router;