const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  try {

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    console.log(decodedToken);
    req.userData = { username: decodedToken.username, userId: decodedToken.userId };
    console.log(req.userData);
    next();
  }
  catch (error) {
    console.log(error);
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
