// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VideoPlayer = () => {
//   const [videoUrl, setVideoUrl] = useState('');

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         // Make HTTP GET request to fetch video data
//         const response = await axios.get('http://localhost:5000/video/moon.mp4', {
//           responseType: 'blob', // Treat response data as a blob
//         });

//         // Read the response data as a blob using FileReader
//         const reader = new FileReader();
//         reader.onload = () => {
//           // Convert the blob to a base64 string
//           const videoData = reader.result.split(',')[1];
//           // Set the base64-encoded video data as the source URL for the video element
//           setVideoUrl(`data:video/mp4;base64,${videoData}`);
//         };
//         reader.readAsDataURL(response.data);
//       } catch (error) {
//         console.error('Error fetching video:', error);
//       }
//     };

//     fetchVideo();
//   }, []);

//   return (
//     <div>
//       {videoUrl && (
//         <video controls>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       )}
//     </div>
//   );
// };


// export default VideoPlayer;
















// frontend.js
import React, { useState } from 'react';
import './App.css';
import Test from './Test';
import VideoPlayer from './VideoPlayer';
import Encryption from './Encryption';

function App() {
  const [videoUrl, setVideoUrl] = useState('');

  const fetchVideo = async () => {
    try {
      const response = await fetch('http://localhost:3001/video/49ddc0fa-70dd-4fd1-8e85-ae702e3fa49b');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  return (
    <div className="App">
      {/* <h1>Video Player</h1>
      <button onClick={fetchVideo}>Fetch Video</button>
      <div>
        {videoUrl && (
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <Test></Test> */}
      {/* <VideoPlayer/> */}
      <Encryption></Encryption>
      
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [objects, setObjects] = useState([]);
//   const [selectedObject, setSelectedObject] = useState('');
//   const [objectUrl, setObjectUrl] = useState('');

//   useEffect(() => {
//     // Fetch objects from backend
//     const fetchObjects = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/objects');
//         const data = await response.json();
//         console.log('data',data)
//         setObjects(data);
//       } catch (error) {
//         console.error('Error fetching objects:', error);
//       }
//     };

//     fetchObjects();
//   }, []);

//   const handleObjectSelect = (object) => {
//     setSelectedObject(object);
//     setObjectUrl(`http://localhost:3001/api/objects/${object.name}`);
//   };

//   return (
//     <div className="App">
//       <h1>MinIO Object Viewer</h1>
//       <div>
//         {objects.map((object) => (
//           <button key={object.name} onClick={() => handleObjectSelect(object)}>
//             {object.name}
//           </button>
//         ))}
//       </div>
//       <div>
//         {objectUrl && (
//           <video controls>
//             <source src={objectUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
