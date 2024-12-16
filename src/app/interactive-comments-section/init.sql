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
    username TEXT NOT NULL,
    replying_to INTEGER,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE,
    FOREIGN KEY (replying_to) REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE votes (
    username TEXT NOT NULL,
    comment_id INTEGER NOT NULL,
    vote_value INTEGER NOT NULL CHECK (vote_value IN (-1, 1)),
    PRIMARY KEY (username, comment_id),
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE
);

-- Insert user data
INSERT INTO users (username, image_png, image_webp) VALUES
    ('juliusomo', 'interactive-comments-section/avatars/image-juliusomo.png', 'interactive-comments-section/avatars/image-juliusomo.webp'),
    ('amyrobson', 'interactive-comments-section/avatars/image-amyrobson.png', 'interactive-comments-section/avatars/image-amyrobson.webp'),
    ('maxblagun', 'interactive-comments-section/avatars/image-maxblagun.png', 'interactive-comments-section/avatars/image-maxblagun.webp'),
    ('ramsesmiron', 'interactive-comments-section/avatars/image-ramsesmiron.png', 'interactive-comments-section/avatars/image-ramsesmiron.webp');

-- Insert comment data with actual dates
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
