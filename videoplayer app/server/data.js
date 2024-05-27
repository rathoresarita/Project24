const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Function to encrypt video
function encryptVideo(videoBuffer, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    const encrypted = Buffer.concat([cipher.update(videoBuffer), cipher.final()]);
    return encrypted;
}

// Function to send email with decryption key
async function sendEmailWithKey(email, key) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nihal.kumbhalkar@gmail.com',
            pass: 'Cdac@#11'
        }
    });

    let info = await transporter.sendMail({
        from: 'nihal.kumbhalkar@gmail.com',
        to: email,
        subject: 'Decryption Key for Video',
        text: `Here is your decryption key: ${key}`
    });

    console.log("Email sent: %s", info.messageId);
}

// API endpoint to encrypt video and send decryption key via email
app.post('/encrypt-video', (req, res) => {
    const { videoBuffer, email } = req.body;
    const encryptionKey = crypto.randomBytes(32); // Generate random encryption key
    const encryptedVideo = encryptVideo(videoBuffer, encryptionKey);

    // Send decryption key via email
    sendEmailWithKey(email, encryptionKey.toString('base64'));

    res.send({ encryptedVideo });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
