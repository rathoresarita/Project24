const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const port = 5001;

;
app.use(cors()); 

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from only this origin
    credentials: true // Allow cookies to be sent
  }));







app.use(bodyParser.json());

// Encryption and decryption functions
function encrypt(text, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Generate a random decryption key
const decryptionKey = crypto.randomBytes(32).toString('hex'); // 32 bytes = 256 bits
console.log('Decryption Key:', decryptionKey); // Log the decryption key

// Provide the encryption link at the backend
const apiLink = 'http://localhost:3001/video/49ddc0fa-70dd-4fd1-8e85-ae702e3fa49b';
// Encryption key (Make sure to keep it secure)
const encryptionKey = 'YourEncryptionKey';

// Encrypt the API link
const encryptedLink = encrypt(apiLink, encryptionKey);
console.log('Encrypted Link:', encryptedLink);

// Endpoint to send encrypted link and decryption key to frontend
app.get('/encryptedData', (req, res) => {
    res.status(200).json({ encryptedLink, decryptionKey });
});

// Endpoint to handle decryption and verification
app.post('/decrypt', (req, res) => {
    const { encryptedLink, decryptionKey } = req.body;

    try {
        // Decrypt the link
        const decryptedLink = decrypt(encryptedLink, decryptionKey);
        // Here you may want to validate the decrypted link to ensure it's a valid video link

        res.status(200).json({ decryptedLink, decryptionKey });
    } catch (error) {
        console.error('Error decrypting link:', error);
        res.status(500).json({ error: 'Error decrypting link' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});