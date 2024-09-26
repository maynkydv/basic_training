const express = require('express');
const sequelize = require('./config/configConnection');
const User = require('./models/user');
const Post = require('./models/post');

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// Sync will create the models
sequelize.sync();
// sequelize.sync({ force: true })
// sequelize.sync({ force: true })

//! USER CRUD OPERATIONS
// CREATE - Add a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get a specific user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//! POST CRUD OPERATIONS
// CREATE - Add a new post
app.post('/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get post by post ID
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get posts by user ID
app.get('/users/:userId/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.params.userId } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Update a post by ID
app.put('/posts/:id', async (req, res) => {
  try {
    const [updated] = await Post.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id);
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Delete a post by ID
app.delete('/posts/:id', async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
