const {MongoClient}= require("mongodb")
require("dotenv").config({path:"./config.env"})

const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const collections = await client
      .db("wplan")
      .listCollections()
      .toArray();

    collections.forEach(col => {
      console.log("📁 Collection:", col.name);
    });

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();
