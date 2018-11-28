const express = require("express");
const app = express();
const port = process.env.PORT || 3535;
const queries = require("./queries");

app.listen(port, console.log(`Broadcasting on ${port}`));

app.get("/", (req, res) => {
  queries.listAll().then(students => res.send(students));
});
