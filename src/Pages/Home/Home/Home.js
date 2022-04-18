import React from "react";
import Banner from "../Banner/Banner";
import FreeTrail from "../FreeTrail/FreeTrail";
import "./Home.css";

const Home = () => {
  return (
    <>
     <div className="hey">
      <Banner />
      <FreeTrail/>
     </div>
    </>
  );
};

export default Home;
