
// const fs = require('fs');
// const path = require('path');
// const Minio = require('minio');
// const readline = require('readline');
//   const fs = require('fs');
// const path = require('path');
// const Minio = require('minio');

// const minioClient = new Minio.Client({
//   endPoint: '127.0.0.1',
//   port: 9000,
//   useSSL: false,
//   accessKey: 'minioadmin',
//   secretKey: 'minioadmin'
// });

// const bucketName = 'meet';
// const basePath = '/home/sarita/Music/recordings'; // Base directory containing your mp4 files

// // List all files in the directory
// fs.readdir(basePath, function(err, files) {
//   if (err) {
//     return console.log('Error reading directory:', err);
//   }

//   // Iterate over each file
//   files.forEach(function(file) {
//     const filePath = path.join(basePath, file);
//     const objectName = file;

//     const metaData = {
//       'Content-Type': 'video/mp4', // Set content type to indicate it's an mp4 file
//     };

//     const fileStream = fs.createReadStream(filePath);

//     // Upload file to MinIO
//     minioClient.putObject(bucketName, objectName, fileStream, metaData, function(err, etag) {
//       if (err) {
//         return console.log('Error uploading file:', filePath, err);
//       }
//       console.log('File uploaded successfully:', filePath);
//     });
//   });
// });


// const fs = require('fs');
// const path = require('path');
// const Minio = require('minio');
// const readline = require('readline');

// // Initialize MinIO client
// const minioClient = new Minio.Client({
//   endPoint: '127.0.0.1',
//   port: 9000,
//   useSSL: false,
//   accessKey: 'minioadmin',
//   secretKey: 'minioadmin'
// });

// // Function to upload files to MinIO
// function uploadFiles(bucketName, basePath) {
//   // List all files in the directory
//   fs.readdir(basePath, function(err, files) {
//     if (err) {
//       console.error('Error reading directory:', err);
//       return;
//     }

//     // Iterate over each file
//     files.forEach(function(file) {
//       const filePath = path.join(basePath, file);
//       const objectName = file + '_' + Date.now(); // Append timestamp to the object name

//       const metaData = {
//         'Content-Type': 'video/mp4', // Set content type to indicate it's an mp4 file
//       };

//       const fileStream = fs.createReadStream(filePath);

//       // Upload file to MinIO using the bucket name
//       minioClient.putObject(bucketName, objectName, fileStream, metaData, function(err, etag) {
//         if (err) {
//           console.error('Error uploading file:', filePath, err);
//         } else {
//           console.log('File uploaded successfully:', filePath);
//           console.log('Object ID (etag):', etag); // Print the object ID (etag)
//         }
//       });
//     });
//   });
// }

// // Create an interface to read user input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt the user to enter the bucket name
// rl.question('Enter the bucket name: ', function(bucketName) {
//   // Create the bucket if it doesn't exist
//   minioClient.makeBucket(bucketName, '', function(err) {
//     if (err) {
//       // Check if bucket already exists or if there was an error
//       if (err.code === 'BucketAlreadyOwnedByYou') {
//         console.log(`Bucket '${bucketName}' already exists.`);
//       } else {
//         console.error('Error creating bucket:', err);
//         return rl.close();
//       }
//     }

//     // Call function to upload files to the created bucket
//     const basePath = '/home/sarita/Music/recordings'; // Base directory containing your mp4 files
//     uploadFiles(bucketName, basePath);
//   });
// });

// // Close the readline interface when done
// rl.on('close', function() {
//   process.exit(0);
// });


const fs = require('fs');
const path = require('path');
const Minio = require('minio');
const readline = require('readline');
const { v4: uuidv4 } = require('uuid'); // Import UUID generator function

// Initialize MinIO client
const minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'minioadmin',
  secretKey: 'minioadmin'
});

// Function to upload files to MinIO
function uploadFiles(bucketName, basePath) {
  // List all files in the directory
  fs.readdir(basePath, function(err, files) {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Iterate over each file
    files.forEach(function(file) {
      const filePath = path.join(basePath, file);
      const objectId = uuidv4(); // Generate a UUID for the object name

      const metaData = {
        'Content-Type': 'video/mp4', // Set content type to indicate it's an mp4 file
        'UUID': objectId // Include UUID in metadata
      };

      const fileStream = fs.createReadStream(filePath);

      // Upload file to MinIO using the bucket name
      minioClient.putObject(bucketName, objectId, fileStream, metaData, function(err, etag) {
        if (err) {
          console.error('Error uploading file:', filePath, err);
        } else {
          console.log('File uploaded successfully:', filePath);
          console.log('Object ID (etag):', etag); // Print the object ID (etag)
          console.log('met',objectId)
        }
      });
    });
  });
}

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the bucket name
rl.question('Enter the bucket name: ', function(bucketName) {
  // Create the bucket if it doesn't exist
  minioClient.makeBucket(bucketName, '', function(err) {
    if (err) {
      // Check if bucket already exists or if there was an error
      if (err.code === 'BucketAlreadyOwnedByYou') {
        console.log(`Bucket '${bucketName}' already exists.`);
      } else {
        console.error('Error creating bucket:', err);
        return rl.close();
      }
    }

    // Call function to upload files to the created bucket
    const basePath = '/home/sarita/Music/recordings'; // Base directory containing your mp4 files
    uploadFiles(bucketName, basePath);
  });
});

// Close the readline interface when done
rl.on('close', function() {
  process.exit(0);
});
