const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const app = express();

// database setup
dbConnection();

// public folder
app.use(express.static("public"));

// reading and body parsing
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));

app.listen(4000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
