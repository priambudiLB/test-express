const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const handleServer = () => console.log(`App running at port ${port}`);
app.get("/", (req, res) => {
  res.send(200);
});

app.listen(port, handleServer);
