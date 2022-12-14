const express = require("express");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const router = express.Router();

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", revalidateToken);

module.exports = router;
