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
  }&source=nodejs&output=json&api_key=99e862960da1f6c3c8cfcc8f6ba4f35968cee4846f4411a8a8e75b8e697c3d9e`;

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
