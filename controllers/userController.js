'use strict';
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')

exports.register = function(req, res) {
  let newUser = new User(req.body)

  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user){
    if (err) {
      return res.status(400).send({
        message: err
      })
    } else {

      user.hash_password = undefined;
      return res.json(user);
    }
  })
}

exports.login = function(req, res) {

  User.findOne({
    email: req.body.email
  }, function(err, user) {

    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' })
    } else if (user) {
      if(!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' })
      } else {
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'secret', { expiresIn: '1h' } ) })
      }
    }
  })
}
