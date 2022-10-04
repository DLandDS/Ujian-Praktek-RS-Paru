//init database mongodb
const { MongoClient } = require("mongodb");

const dburl = "mongodb://localhost:27017";
const dbname = "data-rumah-sakit";
const dbclient = new MongoClient(dburl);

(async () => {
  await dbclient.connect();
  console.log("Connected successfully to server");
})();
  
const db = dbclient.db(dbname);
const Pasien = db.collection("pasien");

module.exports = {
  Pasien
}