const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

require('dotenv').config();


// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

// Set up JSON body parsing 
app.use(express.json());

// Define routes

// Get all blog posts
app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a single blog post
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  connection.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(results[0]);  // made it an array to give us the specific data in the array not allowing the array will post an array data of the post
    }
  });
});

// Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  connection.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) throw err;
    const postId = result.insertId;
    res.status(201).json({ id: postId, title, content });
  });
});

// Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  connection.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, postId], (err) => {
    if (err) throw err;
    res.json({ id: postId, title, content });
  });
});

// Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  connection.query('DELETE FROM posts WHERE id = ?', [postId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
