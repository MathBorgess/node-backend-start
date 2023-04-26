const express = require("express");
const app = express();

const fn = require("./service.js");

app.get("/", async (req, res) => {
  fn();
  res.send("JSON.stringify(req)");
});

//req é o objeto requisição
//res é o objeto resposta

app.listen(3000, () => console.log("listening on port 3000"));
