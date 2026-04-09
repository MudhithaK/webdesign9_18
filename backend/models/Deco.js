const mongoose = require('mongoose');

const DecoSchema = new mongoose.Schema({

    Decotype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const DecoModel = mongoose.model("Deco", DecoSchema, "deco");
module.exports = DecoModel;
