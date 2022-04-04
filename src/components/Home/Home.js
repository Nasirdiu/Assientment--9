import React from "react";
import { useNavigate } from "react-router-dom";
import Bike from "../../Asstes/Bike.jpg";
import useBike from "../../hooks/useBike";
import Bikes from "../Bikes/Bikes";
import "./Home.css";
const Home = () => {
  const negative = useNavigate();
  const [bikes] = useBike();
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h1>
            My Next Bike <span className="text-info">Suzuki Gixxer....</span>
          </h1>
          <p>
            The 2022 Gixxer promises even more dynamic riding experience with
            advanced looks and features setting up its own standard.
          </p>
          <button className="btn btn-info w-25">Suzuki Gixxer</button>
        </div>
        <div className="">
          <img className="img-fluid w-100" src={Bike} alt="" />
        </div>
      </div>
      <div className="mt-5 ">
        <h1 className="text-info">Coustomer Review :-</h1>
      </div>
      <div className="bike-container">
        {bikes.slice(0, 3).map((bike) => (
          <Bikes key={bike.id} bike={bike}></Bikes>
        ))}
      </div>
      <div>
        <button
          onClick={() => negative("/review")}
          className="btn btn-info mt-5 mb-5"
        >
          See All Review
        </button>
      </div>
    </div>
  );
};

export default Home;
