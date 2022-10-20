const express = require("express");
const app = express();
const port = 3000;
const { Person } = require("./person");
require("./modules/path");

const person = new Person("Rafael");

app.get("/", (req, res) => {
  res.send(`Olá Mundo, ${person}`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
