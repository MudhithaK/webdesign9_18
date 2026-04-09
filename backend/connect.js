const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("wplan");          // your DB name
    const hotelsCollection = db.collection("hotels"); // collection name

    // 🔥 Fetch all hotel data
    const hotels = await hotelsCollection.find({}).toArray();

    console.log("🏨 Hotels Data:");
    hotels.forEach((hotel, index) => {
      console.log(`${index + 1}. Type: ${hotel.Htype}, Price: ${hotel.price}`);
    });

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();

