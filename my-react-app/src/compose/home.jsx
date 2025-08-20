import React from 'react';
import "../css/home.css"
import img from "../assets/fried_1.jpg"


const Home = () => {
  return (
    <div>
      <br></br>
      <img 
  src={img} 
  alt="Fried Chicken" 
  style={{ width: "100%", height: "550px", display: "flex" }} 
/>

    </div>
  );
};

export default Home;