import React, { useState } from 'react';
import axios from 'axios';

function Test() {
    const [videoFile, setVideoFile] = useState(null);
    const [email, setEmail] = useState('');

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEncrypt = async () => {
        const formData = new FormData();
        formData.append('videoBuffer', videoFile);
        formData.append('email', email);

        try {
            const response = await axios.post('http://localhost:5000/encrypt-video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Encrypted video:', response.data.encryptedVideo);
        } catch (error) {
            console.error('Error encrypting video:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            <button onClick={handleEncrypt}>Encrypt Video</button>
        </div>
    );
}

export default Test;
