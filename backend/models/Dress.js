const mongoose = require('mongoose');

const DressSchema = new mongoose.Schema({

    Dresstype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const DressModel = mongoose.model("Dress",DressSchema, "dress");
module.exports = DressModel;
