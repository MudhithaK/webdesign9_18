const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({

    Caketype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const CakeModel = mongoose.model("Cake", CakeSchema, "cake");
module.exports = CakeModel;
