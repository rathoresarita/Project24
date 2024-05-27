// const express = require('express');
// const CryptoJS = require('crypto-js');
// const cors = require('cors');
// const mysql = require('mysql2')

// const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Sarita@123',
//   database: 'video'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());

// // Generate a random decryption key
// const decryptionKey = CryptoJS.lib.WordArray.random(128 / 8).toString();

// const originalUrl = 'http://localhost:3001/video/49ddc0fa-70dd-4fd1-8e85-ae702e3fa49b';
// const encryptedUrl = CryptoJS.AES.encrypt(originalUrl, decryptionKey).toString();
// console.log("Encrypted URL:", encryptedUrl);

// // Decrypt the URL
// const bytes = CryptoJS.AES.decrypt(encryptedUrl, decryptionKey);
// const decryptedUrl = bytes.toString(CryptoJS.enc.Utf8);
// console.log("Decrypted URL:", decryptedUrl);

// console.log("Decryption Key:", decryptionKey);

// // Encryption endpoint
// app.post('/encrypt', (req, res) => {
//   // Save the encrypted URL to the MySQL database
//   const sql = 'INSERT INTO encrypted_urls (encrypted_url) VALUES (?)';
//   connection.query(sql, [encryptedUrl], (err, result) => {
//     if (err) {
//       console.error('Error saving encrypted URL to database:', err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     console.log('Encrypted URL saved to database');
//     // res.json({ encryptedUrl });

    
//   });
// });

// // Decryption endpoint (not needed for this scenario)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const CryptoJS = require('crypto-js');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sarita@123',
  database: 'video'
});



// Create a transporter object using your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'saritasinghrathore140@gmail.com',
    pass: 'Sarita1029@#*'
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// Generate a random decryption key
const decryptionKey = CryptoJS.lib.WordArray.random(128 / 8).toString();

const originalUrl = 'http://localhost:3001/video/49ddc0fa-70dd-4fd1-8e85-ae702e3fa49b';
const encryptedUrl = CryptoJS.AES.encrypt(originalUrl, decryptionKey).toString();
console.log("Encrypted URL:", encryptedUrl);

// Decrypt the URL
const bytes = CryptoJS.AES.decrypt(encryptedUrl, decryptionKey);
const decryptedUrl = bytes.toString(CryptoJS.enc.Utf8);
console.log("Decrypted URL:", decryptedUrl);

console.log("Decryption Key:", decryptionKey);

// app.post('/encrypt', (req, res) => {
 
 

//   const sql = 'INSERT INTO encrypted_urls (encrypted_url) VALUES (?)';
//   connection.query(sql, [encryptedUrl], (err, result) => {
//     if (err) {
//       console.error('Error saving encrypted URL to database:', err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     console.log('Encrypted URL saved to database');
//     // res.json({ encryptedUrl });
//   });
// });


// app.post('/encrypt', (req, res) => {
  

//   // Assuming there is only one row in the table
//   const updateQuery = 'UPDATE encrypted_urls SET encrypted_url = ? WHERE id = 1'; // Assuming the primary key of the table is 'id'
//   connection.query(updateQuery, [encryptedUrl], (err, result) => {
//     if (err) {
//       console.error('Error updating encrypted URL in database:', err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     console.log('Encrypted URL updated in database');
//     res.sendStatus(200);
//   });
// });


app.post('/encrypt', (req, res) => {
  // Assuming decryptionKey is available in your code


  // Update the existing record with the new encrypted URL
  const updateQuery = 'UPDATE encrypted_urls SET encrypted_url = ? WHERE id = 1';
  connection.query(updateQuery, [encryptedUrl], (err, result) => {
    if (err) {
      console.error('Error updating encrypted URL in database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    
    console.log('Encrypted URL updated in database');

    // Send an email with the decryption key
    const mailOptions = {
      from: 'saritasinghrathore140@gmail.com',
      to: 'saritasinghrathore140@gmail.com',
      subject: 'Decryption Key',
      text: `Your decryption key is: ${decryptionKey}`
    };


    console.log('mail option',mailOptions)

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.sendStatus(200);
      }
    });
  });
});

app.post('/decrypt', (req, res) => {
  

  try {
    
    
    // Send the decrypted URL to the client
    res.json({ decryptedUrl });
  } catch (error) {
    console.error('Error decrypting URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
