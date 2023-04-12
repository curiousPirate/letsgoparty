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
  }&source=nodejs&output=json&api_key=b40cf362d7bd15ae459eac770677ffc8e1e890ac7291ecb0dc55b3b6cee66b70`;

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
