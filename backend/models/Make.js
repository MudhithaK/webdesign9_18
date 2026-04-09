const mongoose = require('mongoose');

const MakeSchema = new mongoose.Schema({

    MUtype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const MakeModel = mongoose.model("MU", MakeSchema, "makeup");
module.exports = MakeModel;
