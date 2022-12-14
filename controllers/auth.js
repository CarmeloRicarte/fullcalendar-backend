const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
  });
};

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
