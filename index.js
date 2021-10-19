const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;
const handleServer = () => console.log(`App running at port ${port}`);
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

app.listen(port, handleServer);
