const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario.model.js");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe un usuario con ese email",
      });
    }
    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
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
    msg: "Se ha iniciado sesión correctamente",
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Token revalidado correctamente",
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
