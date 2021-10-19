const express = require("express");

const app = express();
const handleServer = () => console.log(`App running at port ${3000}`);
app.get("/", (req, res) => {
    res.send(200)
});

app.listen(3000, handleServer);
