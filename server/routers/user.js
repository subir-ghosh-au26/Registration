const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
 const { email} = req.body;

 console.log('req.body', req.body);

 let user = await User.findOne({ email });
 if (user) {
   return res.status(400).send('User with the provided email already exist.');
 }

 try {
   await user.save();
   res.status(201).send();
 } catch (e) {
   res.status(500).send('Something went wrong. Try again later.');
 }
});

module.exports = router;