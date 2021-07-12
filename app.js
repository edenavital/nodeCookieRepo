// const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");

const app = express();

// 1) GLOBAL MIDDLEWARES
// Serving static files
// app.use(express.static(path.join(__dirname, "public")));

// Set security HTTP headers
// app.use(helmet());

app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow to read cookies in server (req.cookies)
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("req.cookies", req.cookies);
  next();
});

// 3) ROUTES
app.use("/api", mainRouter);

module.exports = app;
