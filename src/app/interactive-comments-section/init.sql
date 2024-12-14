-- Create the database schema
CREATE TABLE users (
    username TEXT PRIMARY KEY,
    image_png TEXT,
    image_webp TEXT
);

-- Create comments table
CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL,
    score INTEGER NOT NULL,
    username TEXT NOT NULL,
    replying_to INTEGER,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE,
    FOREIGN KEY (replying_to) REFERENCES comments(id) ON DELETE CASCADE
);

-- Insert user data
INSERT INTO users (username, image_png, image_webp) VALUES
    ('juliusomo', 'interactive-comments-section/avatars/image-juliusomo.png', 'interactive-comments-section/avatars/image-juliusomo.webp'),
    ('amyrobson', 'interactive-comments-section/avatars/image-amyrobson.png', 'interactive-comments-section/avatars/image-amyrobson.webp'),
    ('maxblagun', 'interactive-comments-section/avatars/image-maxblagun.png', 'interactive-comments-section/avatars/image-maxblagun.webp'),
    ('ramsesmiron', 'interactive-comments-section/avatars/image-ramsesmiron.png', 'interactive-comments-section/avatars/image-ramsesmiron.webp');

-- Insert comment data with actual dates
INSERT INTO comments (id, content, created_at, score, username, replying_to) VALUES
    (1, 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You''ve nailed the design and the responsiveness at various breakpoints works really well.', '2023-11-20 10:00:00', 12, 'amyrobson', NULL),
    (2, 'Woah, your project looks awesome! How long have you been coding for? I''m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!', '2023-12-01 14:30:00', 5, 'maxblagun', NULL),
    (3, 'If you''re still new, I''d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It''s very tempting to jump ahead but lay a solid foundation first.', '2023-12-05 09:15:00', 4, 'ramsesmiron', 2),
    (4, 'I couldn''t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.', '2023-12-10 17:45:00', 2, 'juliusomo', 3);

