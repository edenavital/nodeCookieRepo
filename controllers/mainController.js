const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.generateToken = (req, res, next) => {
  const token = signToken(Date.now());
  /*
    In order to set-cookie - we must use both of these options:
    sameSite: "none",
    secure: true,
  */
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    sameSite: "none",
    secure: true,
    httpOnly: false,
  };
  res.cookie("jwt", token, cookieOptions);
  res.token = token;
  next();
};

exports.getData = (req, res, next) => {
  res.status(200).json({
    status: "success",
    token: res.token,
    data: {
      message: "successfully getting data from server",
    },
  });
};

exports.postData = (req, res, next) => {
  console.log("req.body", req.body);
  const reqBody = req.body;
  res.status(200).json({
    status: "success",
    token: res.token,
    data: reqBody,
  });
};
