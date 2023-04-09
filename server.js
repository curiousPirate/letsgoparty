const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/search", async (req, res) => {
  const query = req.query.q;
  const filter = req.query.htichips || "";
  const pageNumber = req.query.page || 1;

  const url = `https://serpapi.com/search?q=${query}&engine=google_events&htichips=${filter}&start=${
    (pageNumber - 1) * 10
  }&source=nodejs&output=json&api_key=4d4f1a185a4e0acb10682c3138690aab6dc19eea1df2a242b99f86a4c8bb4a9e`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
