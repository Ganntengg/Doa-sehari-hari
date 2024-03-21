const express = require("express");
const { getAll, getDetailDoa, searchDoa } = require("./db.js");
const cors = require("cors");
const app = express();

const port = 3002;

app.use(cors());

app.get("/api", (req, res) => {
  res.send({
    status: "ok",
    api: "1.0.0",
  });
});

app.get("/api/all", async (req, res) => {
  res.send(await getAll());
});

app.get("/api/detail/:id", async (req, res) => {
  const id = req.params.id;
  const datas = await getDetailDoa(id);
  res.send(datas);
});

app.get("/api/search", async (req, res) => {
  const query = req.query.doa;
  const search = await searchDoa(query);
  res.send(search);
});

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
