import React from "react";
import { useNavigate } from "react-router-dom";
import Bike from "../../Asstes/Bike.jpg";
import "./Home.css";
const Home = () => {
    const negative=useNavigate()
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h1 className="text-success">My Next Bike Suzuki Gixxer....</h1>
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
        <h1>Coustomer Review</h1>
      </div>
      <div>
        <button onClick={()=>negative('/review')} className="btn btn-info mt-5 mb-5" >See All Review</button>
      </div>
    </div>
  );
};

export default Home;
