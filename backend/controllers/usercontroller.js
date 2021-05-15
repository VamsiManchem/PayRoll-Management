const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/usermodel");

/* New User Created in Data base */
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        username: req.body.username,
        password: hash
    });
    user.save()
      .then(result => {
        res.status(201).json({
          message: 'User Created!',
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
           message: "Invallid authentication credentials!"
        });
      });
  });
};

/* Checking login functionality with Fetching User details from Data Base */
exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth Failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth Failed"
      });
    }
    const token = jwt.sign(
      { username: fetchedUser.username, userId: fetchedUser._id },
      'secret_this_should_be_longer',
      { expiresIn: "1h"}
      );
      console.log(token);
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._Id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
    });
});

}
