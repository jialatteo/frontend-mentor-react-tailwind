import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import next from "next";
import Database from "better-sqlite3";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); // Get Next.js request handler

// Custom server setup
const server = express();

// Initialize SQLite database
const dbPath = "tmp/prod.db";
const db = new Database(dbPath);
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
server.use(cors());
server.use(express.json());

app.prepare().then(() => {
  server.get("/top-level-comments/:currentUsername", (req, res) => {
    const { currentUsername } = req.params;
    try {
      const rows = db
        .prepare(
          ` 
  WITH comment_scores AS (
      SELECT
          comments.id AS comment_id,
          COALESCE(SUM(votes.vote_value), 0) AS score
      FROM
          comments
      LEFT JOIN
          votes ON comments.id = votes.comment_id
      GROUP BY
          comments.id
  )
  SELECT
      c.id,
      c.content,
      c.created_at,
      cs.score, -- Calculated score
      c.username,
      u.image_png,
      u.image_webp,
      c.replying_to,
      r.username AS replying_to_username,
      COALESCE(v.vote_value, 0) AS current_user_vote_value
  FROM
      comments c
  JOIN
      users u ON u.username = c.username
  LEFT JOIN
      comments r ON r.id = c.replying_to
  LEFT JOIN
      comment_scores cs ON c.id = cs.comment_id
  LEFT JOIN
      votes v on v.comment_id = c.id AND v.username = ?
  WHERE 
      c.replying_to IS NULL;
`,
        )
        .all(currentUsername);
      res.json(rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  server.get("/replies/:commentId/:currentUsername", (req, res) => {
    try {
      const { commentId, currentUsername } = req.params;

      const rows = db
        .prepare(
          ` 
  WITH comment_scores AS (
      SELECT
          comments.id AS comment_id,
          COALESCE(SUM(votes.vote_value), 0) AS score
      FROM
          comments
      LEFT JOIN
          votes ON comments.id = votes.comment_id
      GROUP BY
          comments.id
  )
  SELECT
      c.id,
      c.content,
      c.created_at,
      cs.score, -- Calculated score
      c.username,
      u.image_png,
      u.image_webp,
      c.replying_to,
      r.username AS replying_to_username,
      COALESCE(v.vote_value, 0) as current_user_vote_value
  FROM
      comments c
  JOIN
      users u ON u.username = c.username
  LEFT JOIN
      comments r ON r.id = c.replying_to
  LEFT JOIN
      comment_scores cs ON c.id = cs.comment_id
  LEFT JOIN
      votes v on v.comment_id = c.id AND v.username = ?
  WHERE 
      c.replying_to = ?;
      `,
        )
        .all(currentUsername, commentId);

      res.json(rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch replies" });
    }
  });

  server.post("/comments", (req, res) => {
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
        INSERT INTO comments (content, created_at, username, replying_to)
        VALUES (?, datetime('now', '+8 hours'), ?, ?);
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
          0 as score,
          c.username,
          u.image_png,
          u.image_webp,
          c.replying_to,
          r.username AS replying_to_username,
          0 as current_user_vote_value
      FROM
          comments c
      JOIN
          users u ON u.username = c.username
      LEFT JOIN
          comments r ON r.id = c.replying_to
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

  server.delete("/comments/:commentId", (req, res) => {
    try {
      const { commentId } = req.params;

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

  server.put("/comments/:commentId", (req, res) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;

      const comment = db
        .prepare(`SELECT * FROM comments WHERE id = ?`)
        .get(commentId);

      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      db.prepare(`UPDATE comments SET content = ? WHERE id = ?`).run(
        content,
        commentId,
      );

      res.status(200).json({ message: "Comment updated successfully" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to update comment" });
    }
  });

  server.put("/votes", (req, res) => {
    try {
      const { commentId, currentUsername, voteValue } = req.body;

      db.prepare(
        `INSERT OR REPLACE INTO votes (username, comment_id, vote_value) VALUES (?, ?, ?)`,
      ).run(currentUsername, commentId, voteValue);

      res.status(200).json({ message: "Comment vote updated successfully" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to vote comment" });
    }
  });

  server.post("/comments/reset", (req, res) => {
    try {
      db.exec(`
  BEGIN TRANSACTION;
  DELETE FROM comments;
  DELETE FROM votes;
  INSERT INTO comments (id, content, created_at, username, replying_to) VALUES
      (1, 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You''ve nailed the design and the responsiveness at various breakpoints works really well.', '2023-11-20 10:00:00', 'amyrobson', NULL),
      (2, 'Woah, your project looks awesome! How long have you been coding for? I''m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!', '2023-12-01 14:30:00', 'maxblagun', NULL),
      (3, 'If you''re still new, I''d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It''s very tempting to jump ahead but lay a solid foundation first.', '2023-12-05 09:15:00', 'ramsesmiron', 2),
      (4, 'I couldn''t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.', '2023-12-10 17:45:00', 'juliusomo', 3);

  INSERT INTO votes (username, comment_id, vote_value) VALUES
      ('amyrobson', 2, 1),
      ('amyrobson', 4, -1),
      ('maxblagun', 3, 1),
      ('ramsesmiron', 4, 1),
      ('juliusomo', 3, 1),
      ('juliusomo', 2, -1);

  COMMIT;
`);

      res.status(200).json({ message: "Comments table reset successfully" });
    } catch (error) {
      db.exec("ROLLBACK");
      console.error("Database error: ", error);
      res.status(500).json({ error: "Failed to reset comments table" });
    }
  });

  server.post("/shorten-url", async (req, res) => {
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

  // Handle all other routes with Next.js
  server.all("*", (req, res) => {
    return handle(req, res); // Let Next.js handle all other routes
  });

  // Start the server
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
