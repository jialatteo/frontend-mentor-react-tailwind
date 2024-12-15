// /server/server.js
import express from "express";
import fetch from "node-fetch"; // Use import here
import cors from "cors"; // Import cors

const app = express();
const port = 5000;
const { default: Database } = await import("better-sqlite3");
const db = new Database("prod.db");

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

app.get("/top-level-comments", (req, res) => {
  try {
    const rows = db
      .prepare(
        ` 
  SELECT 
      c.id, 
      c.content, 
      c.created_at, 
      c.score, 
      c.username, 
      u.image_png, 
      u.image_webp, 
      c.replying_to, 
      r.username AS replying_to_username
  FROM 
      comments c
  JOIN 
      users u ON u.username = c.username
  LEFT JOIN 
      comments r ON r.id = c.replying_to
  WHERE 
      c.replying_to IS NULL;
`,
      )
      .all();
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

app.get("/replies/:commentId", (req, res) => {
  try {
    const commentId = req.params.commentId;

    const rows = db
      .prepare(
        ` 
        SELECT 
            c.id, 
            c.content, 
            c.created_at, 
            c.score, 
            c.username, 
            u.image_png, 
            u.image_webp, 
            c.replying_to, 
            r.username AS replying_to_username
        FROM 
            comments c
        JOIN 
            users u ON u.username = c.username
        LEFT JOIN 
            comments r ON r.id = c.replying_to
        WHERE 
            c.replying_to = ?;
      `,
      )
      .all(commentId);

    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch replies" });
  }
});

app.post("/comments", (req, res) => {
  try {
    const { content, username, replying_to } = req.body;

    if (!content || !username) {
      return res
        .status(400)
        .json({ error: "Content and username are required" });
    }

    const result = db
      .prepare(
        `
        INSERT INTO comments (content, created_at, score, username, replying_to)
        VALUES (?, datetime('now', '+8 hours'), 0, ?, ?);
      `,
      )
      .run(content, username, replying_to || null);

    // Retrieve the full comment including user details
    const newComment = db
      .prepare(
        `
        SELECT 
            c.id, 
            c.content, 
            c.created_at, 
            c.score, 
            c.username, 
            u.image_png, 
            u.image_webp, 
            c.replying_to
        FROM 
            comments c
        JOIN 
            users u ON u.username = c.username
        WHERE 
            c.id = ?;
      `,
      )
      .get(result.lastInsertRowid);

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

app.delete("/comments/:commentId", (req, res) => {
  try {
    const { commentId } = req.params;
    console.log("commentId", commentId);

    const comment = db
      .prepare(`SELECT * FROM comments WHERE id = ?`)
      .get(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    db.prepare(`DELETE FROM comments WHERE id = ?`).run(commentId);

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

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
