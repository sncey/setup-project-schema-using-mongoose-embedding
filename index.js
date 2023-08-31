/*
const express = require("express");

const db = require("./db/connection");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
*/
const express = require("express");

const db = require("./db/connection");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
const Author = require('./models/author');
});

app.post('/authors', async (req, res) => {
  const author = new Author({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    nationality: req.body.nationality,
    areasOfExpertise: req.body.areasOfExpertise
  });

  try {
    const savedAuthor = await author.save();
    res.send(savedAuthor);
  } catch (err) {
    res.status(400).send(err);
  }
});