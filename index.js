/**
 * Auth routes
 * host + /api/auth
 */

const express = require("express");
require("dotenv").config();

const app = express();

// public folder
app.use(express.static("public"));

// routes
app.use("/api/auth", require("./routes/auth"));

app.listen(4000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
