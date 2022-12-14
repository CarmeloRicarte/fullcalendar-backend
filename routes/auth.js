const express = require("express");
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const router = express.Router();

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 8 caracteres").isLength({
      min: 8,
    }),
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 8 caracteres").isLength({
      min: 8,
    }),
  ],
  loginUser
);

router.get("/renew", revalidateToken);

module.exports = router;
