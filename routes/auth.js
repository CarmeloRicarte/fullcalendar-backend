/**
 * Auth routes
 * host + /api/auth
 */

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { fieldsValidator } = require("../middlewares/fieldsValidator");
const { validateJWT } = require("../middlewares/validateJWT");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña debe ser de 8 caracteres").isLength({
      min: 8,
    }),
    fieldsValidator,
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
    fieldsValidator,
  ],
  loginUser
);

router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
