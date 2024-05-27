// server.js

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample data representing video metadata
const videos = [
  {
    id: 1,
    title: 'Sample Video 1',
    description: 'This is the first sample video',
    url: 'https://example.com/video1.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/video1.jpg',
    duration: '01:30', // Example duration format
  },
  {
    id: 2,
    title: 'Sample Video 2',
    description: 'This is the second sample video',
    url: 'https://example.com/video2.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/video2.jpg',
    duration: '02:00', // Example duration format
  },
  // Add more video metadata objects as needed
];

// API endpoint to fetch video metadata
app.get('/api/videos', (req, res) => {
  try {
    // In a real-world scenario, you would fetch video metadata from your object database
    // Here, we're just returning the sample data
    res.json(videos);
  } catch (error) {
    console.error('Error fetching video metadata:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
