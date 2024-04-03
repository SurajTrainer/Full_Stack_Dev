// backend/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Dummy data
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// API endpoint to get data
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
