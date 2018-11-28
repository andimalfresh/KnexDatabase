const express = require("express");
const app = express();
const port = process.env.PORT || 3535;

app.listen(port, console.log(`Broadcasting on ${port}`));

app.get("/", (req, res) => {
  res.send("We Ballin Now Dog !!");
});
