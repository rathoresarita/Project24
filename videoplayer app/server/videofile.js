
const express = require('express');
const CryptoJS = require('crypto-js');
const cors = require('cors');

const app = express();


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

// Encryption endpoint
app.post('/encrypt', (req, res) => {
    res.json({ encryptedUrl })
  

});

// Decryption endpoint (not needed for this scenario)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});