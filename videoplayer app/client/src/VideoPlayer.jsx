import React, { useState } from 'react';
import axios from 'axios'; 

function VideoPlayer() {
  const [decryptionKey, setDecryptionKey] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const fetchEncryptedData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/encryptedData');
      const { encryptedLink, decryptionKey } = response.data;
      console.log('/....',encryptedLink)
      console.log('/',decryptionKey)
      
      // Set decryption key and handle further operations
      setDecryptionKey(decryptionKey);
      handlePlayVideo(encryptedLink, decryptionKey);
    } catch (error) {
      console.error('Error fetching encrypted data:', error);
      // Handle error (e.g., show an error message)
    }
  };

  const handlePlayVideo = async (encryptedLink, decryptionKey) => {
    try {
      // Prompt the user for decryption key
      const key = prompt('Enter decryption key:');
      if (key === decryptionKey) {

        console.log('ded',encryptedLink)
        // Decrypt the video link
        const decryptedLinkResponse = await axios.post('http://localhost:5001/decrypt', {
          encryptedLink,
          decryptionKey
        });

        // Set the decrypted video link
        setVideoLink(decryptedLinkResponse.data.decryptedLink);
      } else {
        alert('Invalid decryption key!');
      }
    } catch (error) {
      console.error('Error decrypting video link:', error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleThumbnailClick = () => {
    fetchEncryptedData();
  };

  return (
    <div>
      <img src={thumbnail} alt="Video Thumbnail" onClick={handleThumbnailClick} />
      {videoLink && <video controls>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
      {!videoLink && <input type="text" value={decryptionKey} placeholder="Decryption Key" disabled />}
    </div>
  );
}

export default VideoPlayer;
