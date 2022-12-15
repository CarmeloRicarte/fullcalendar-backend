const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    // reference to Usuario model, will have the properties of Usuario
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = model("Evento", EventoSchema);