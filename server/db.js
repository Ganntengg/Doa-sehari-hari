const { MongoClient } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

const connect = async () => {
  await client.connect();
  const db = client.db("DBDoa");
  const collection = db.collection("doa");
  return collection;
};

const getAll = async () => {
  const all = await connect();
  const cmd = all.find();
  const res = await cmd.toArray((err, res) => {
    if (err) throw err;
  });
  return res;
};

const searchDoa = async (query) => {
  const connects = await connect();
  const search = await connects.findOne({ doa: query });
  return search;
};

const getDetailDoa = async (id) => {
  const connects = await connect();
  const find = await connects.findOne({ id: id });
  return find;
};

module.exports = { getAll, getDetailDoa, searchDoa };
