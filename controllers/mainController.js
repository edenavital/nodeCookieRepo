const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.generateToken = (req, res, next) => {
  const token = signToken(Date.now());
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    sameSite: "None",
    // httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

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
