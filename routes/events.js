/**
 * Events routes
 * host + /api/events
 */
const express = require("express");
const router = express.Router();
const { validateJWT } = require("../middlewares/validateJWT");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

// every request will validate previously the JWT

router.use(validateJWT);

router.get("/", getEvents);

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
