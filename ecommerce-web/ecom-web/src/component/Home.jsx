import React from 'react';
import SideBar from './SideBar';
import '../css/home.css'; // Import CSS file for Home page styling



const Home = () => {
  return (
    <div className="home-container">
      <SideBar />
      <div className="card-grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <div key={index} className="card">
            <img src={`../images/image${index+1}.jpeg`} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
