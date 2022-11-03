const express = require("express");
const app = express();
app.use(express.json());
const UserModel = require("../src/models/user.model");

app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Olá</h1>");
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.messaage);
  }
});

const port = 8080;

app.listen(port, () => console.log(`rodando ${port}`));
