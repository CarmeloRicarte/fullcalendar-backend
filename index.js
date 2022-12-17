const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { dbConnection } = require("./database/config");

// database setup
dbConnection();

// CORS setup
app.use(cors());

// public folder
app.use(express.static("public"));

// reading and body parsing
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(4000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
