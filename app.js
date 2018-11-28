const express = require("express");
const app = express();
const port = process.env.PORT || 1111;

app.listen(console.log(`listening on ${port}`));

app.get("/", (req, res) => {
  res.send("We Ballin Now Dog !!");
});
