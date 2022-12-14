const { response } = require("express");
const Usuario = require("../models/Usuario.model.js");

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    const usuario = new Usuario(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: "User created successfully!",
      name,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor, hable con el administrador",
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

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
