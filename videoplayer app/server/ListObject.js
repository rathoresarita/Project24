// Backend code (backend.js)
const express = require('express');
const app = express();
const Minio = require('minio');

// Enable CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Initialize MinIO client
const minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'minioadmin',
  secretKey: 'minioadmin'
});

// API endpoint to list objects in the bucket 'hpc'
app.get('/api/objects', (req, res) => {
    const objects = [];
    const stream = minioClient.listObjects('hpc', '', true);
    stream.on('data', function(obj) {
      objects.push(obj);
    });
  
    stream.on('error', function(err) {
      res.status(500).json({ error: 'Error listing objects' });
    });
  
    stream.on('end', function() {
      res.json(objects);
    });
});

// Endpoint to fetch video file based on UUID
app.get('/api/object/:uuid', (req, res) => {
  const uuid = req.params.uuid;

  // Retrieve the object from MinIO using the UUID provided in the URL
  minioClient.getObject('hpc', uuid, function(err, stream) {
    if (err) {
      console.error('Error retrieving object:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Set appropriate content type for video
    res.set('Content-Type', 'video/mp4');

    // Stream the video file back to the client
    stream.pipe(res);
  });
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
