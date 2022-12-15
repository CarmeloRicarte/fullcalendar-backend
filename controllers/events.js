const { response } = require("express");
const Evento = require("../models/Evento.model");

const getEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = async (req, res = response) => {
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid; // reference to the user who created the event
    const createdEvent = await evento.save();

    res.status(201).json({
      ok: true,
      evento: createdEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor, hable con el administrador",
    });
  }
};

const updateEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
