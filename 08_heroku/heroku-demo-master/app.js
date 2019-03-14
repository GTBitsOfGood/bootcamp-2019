const express = require("express");

const app = express();
const PORT = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, _ => console.log(`Listening on port: ${PORT}`));
