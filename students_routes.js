const express = require("express");
const router = express.Router();
const queries = require("../queries/queries");

router.get("/", (req, res) => {
  queries
    .readAllStudents()
    .then(students => res.status(200).send({ students }));
});

router.get('/:id' (req, res) => {
    queries.readStudentById(req.params.id).then(student => res.status(200).send({ student }))
})