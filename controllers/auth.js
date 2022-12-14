const { response } = require("express");
const { validationResult } = require("express-validator");

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  // errors checking
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "User created successfully!",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  // errors checking
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.json({
    ok: true,
    msg: "Login successfully!",
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Token revalidated successfully!",
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
