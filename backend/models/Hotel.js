const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({

    Htype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const HotelModel = mongoose.model("hotels",HotelSchema);
module.exports = HotelModel;
