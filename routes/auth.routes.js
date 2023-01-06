const bcrypt = require('bcryptjs');
 const router = require("express").Router();
 const saltRounds = 10;

 const User = require('../models/User.model');

 /* GET Signup page */
 router.get("/signup", (req, res) => {
   res.render("auth/signup");
 });

 module.exports = router;