const { response } = require("express");
const Evento = require("../models/Evento.model");

/**
 * It gets all the events from the database and populates the user field with the name of the user
 * @param req - The request object.
 * @param [res] - The response object.
 */
const getEvents = async (req, res = response) => {
  const events = await Evento.find().populate("user", "name");

  res.json({
    ok: true,
    events,
  });
};

/**
 * It creates a new event and saves it to the database
 * @param req - The request object.
 * @param [res] - The response object that will be sent back to the client.
 */
const createEvent = async (req, res = response) => {
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid; // reference to the user who created the event
    const createdEvent = await evento.save();

    res.status(201).json({
      ok: true,
      event: createdEvent,
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
  const eventId = req.params.id;
  const uid = req.uid;
  try {
    const event = await Evento.findById(eventId);

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: "Evento no encontrado con ese id",
      });
    }

    // evit that another user update an event not created by this
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegios para editar este evento",
      });
    }

    const updatedEvent = await Evento.findByIdAndUpdate(eventId, req.body, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor, hable con el administrador",
    });
  }
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
