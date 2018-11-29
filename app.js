const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, console.log(`Broadcasting on ${port}`));

app.get("/:id", (req, res) => {
  queries.getById(req.params.id).then(students => res.send(students));
});

app.get("/", (req, res) => {
  queries.listAll().then(students => res.send(students));
});

app.post("/", (req, res) => {
  queries.createStudent(req.body).then(res.sendStatus(201));
});

app.delete("/:id", (req, res) => {
  queries.deleteStudent(req.params.id).then(res.sendStatus(204));
});
app.put("/:id", (req, res) => {
  queries
    .updateStudent(req.params.id, req.body)
    .then(student => res.json(student));
});
