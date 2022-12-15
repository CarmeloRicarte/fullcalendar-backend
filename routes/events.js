/**
 * Events routes
 * host + /api/events
 */
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validateJWT");
const { fieldsValidator } = require("../middlewares/fieldsValidator");
const { isDate } = require("../helpers/isDate");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

// every request will validate previously the JWT

router.use(validateJWT);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de fin es obligatoria").custom(isDate),
    fieldsValidator,
  ],
  createEvent
);

router.put("/:id", [fieldsValidator], updateEvent);

router.delete("/:id", [fieldsValidator], deleteEvent);

module.exports = router;
