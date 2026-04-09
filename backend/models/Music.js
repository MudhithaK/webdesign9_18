const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({

    Musictype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const MusicModel = mongoose.model("Music", MusicSchema, "music");
module.exports = MusicModel;
