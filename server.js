const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
//   });
// }

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
