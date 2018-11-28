const express = require("express");
const app = express();
const port = process.env.PORT || 3535;
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors);
app.use(bodyParser);

app.listen(port, console.log(`Broadcasting on ${port}`));

app.get("/", (req, res) => {
  queries.listAll().then(students => res.send(students));
});
