import React from "react";
import useBike from "../../hooks/useBike";
import Bikes from "../Bikes/Bikes";
import './Review.css'
const Review = () => {
  const [bikes, setBikes] = useBike();
  return (
    <div className="review">
      {bikes.map((bike) => (
        <Bikes key={bike.id} bike={bike}></Bikes>
      ))}
    </div>
  );
};

export default Review;
