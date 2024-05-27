import React, { useState } from "react";
import axios from "axios";

function Encryption() {
  const [decryptionKey, setDecryptionKey] = useState("");
  const [decryptedVideoUrl, setDecryptedVideoUrl] = useState("");
  const [error, setError] = useState("");

  const handleDecrypt = async () => {
    try {
      const response = await axios.post("http://localhost:5000/encrypt");
      const encryptedURL = response.data.encryptedUrl;

      // Save encrypted URL to state
      setDecryptedVideoUrl(encryptedURL);
      setError("");
    } catch (error) {
      console.error("Error saving encrypted URL:", error);
      setError("Failed to save encrypted URL.");
    }
  };

  const handlePlayVideo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/decrypt", {
        encryptedUrl: decryptedVideoUrl,
        key: decryptionKey
      });
      const decryptedURL = response.data.decryptedUrl;

      // Play video using the decrypted URL
      window.open(decryptedURL);
      setError("");
    } catch (error) {
      console.error("Error decrypting URL:", error);
      setError("Failed to decrypt URL. Please check the decryption key.");
    }
  };

  return (
    <div>
      <h1>Decryption and Video Playback App</h1>
      <div>
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      {decryptedVideoUrl && (
        <div>
          <input
            type="text"
            placeholder="Enter decryption key"
            value={decryptionKey}
            onChange={(e) => setDecryptionKey(e.target.value)}
          />
          <button onClick={handlePlayVideo}>Play Video</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Encryption;
