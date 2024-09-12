const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'images' directory (and its subdirectories)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the index.html file when the user accesses the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ensure index.html is in the same folder as server.js
});

// Serve the redirect.html file when accessed
app.get('/redirect.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'redirect.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
