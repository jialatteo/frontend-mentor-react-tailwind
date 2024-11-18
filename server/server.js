// /server/server.js
import express from "express";
import fetch from "node-fetch"; // Use import here
import cors from "cors"; // Import cors

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

app.post("/shorten-url", async (req, res) => {
  const { url } = req.body;

  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: new URLSearchParams({ url }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to shorten URL" });
    }

    const json = await response.json();
    res.json({ result_url: json.result_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
