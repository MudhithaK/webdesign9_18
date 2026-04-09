// server.js
const express = require("express");
const mongoose = require("mongoose"); // ✅ add Mongoose
const cors = require("cors");
require("dotenv").config({ path: "./config.env" }); // load ATLAS_URL

const app = express();
const HotelModel = require("./models/Hotel"); // your model
const CakeModel = require("./models/Cake");
const DecoModel = require("./models/Deco");
const DressModel = require("./models/Dress");
const MakeModel = require("./models/Make");
const MusicModel = require("./models/Music");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔥 Connect to MongoDB with Mongoose
mongoose
  .connect(process.env.ATL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected (Mongoose)"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Test route
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the API! SUCCESSFUL" });
});

// Hotels route
app.get("/api/hotels", (req, res) => {
    HotelModel.find()
      .then(hotels => res.json(hotels))
      .catch(err => res.status(500).json({ error: err.message }));
});

app.get("/api/cakes", async(req,res)=>{
    try{
        const cakes = await CakeModel.find();
        res.json(cakes);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get("/api/decorations", async(req,res)=>{
    try{
        const decos= await DecoModel.find();
        res.json(decos);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get("/api/dresses",async(req,res)=>{
    try{
        const dresses= await DressModel.find();
        res.json(dresses);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get("/api/makeup",async(req,res)=>{
    try{
        const makeup= await MakeModel.find();
        res.json(makeup);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get("/api/music",async(req,res)=>{
    try{
        const musics= await MusicModel.find();
        res.json(musics);
    }catch(err){
        res.status(500).json(err);
    }
});


app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
