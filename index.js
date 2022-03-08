require("dotenv").config();
const api = require("./api");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/", async (req, res) => {
  let json = await axios.get("https://jsonplaceholder.typicode.com/photos");
  let response = `<html><head><title>Desafio</title></head><body>`;

  for (i in json["data"]) {
    if (i <= 100) {
      response += `<h3>${json["data"][i].albumId} / ${json["data"][i].id} - ${json["data"][i].title}</h3><img src='${json["data"][i].url}'//><br />`;
    }
  }

  response += `</body>`;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
