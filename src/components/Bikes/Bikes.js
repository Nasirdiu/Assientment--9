import React from 'react';
import './Bikes.css'
const Bikes = (props) => {
    console.log(props.bike);
    const {name,img,review,ratings}=props.bike;
    return (
        <div className='bikes'>
            <h4>Name:-{name}</h4>
            <div>
                <img className='img-fluid w-50 img-bikes' src={img} alt="" />
            </div>
            <p>Review:-{review.slice(0,100)}</p>
            <h6>Ratings:{ratings}</h6>
        </div>
    );
};

export default Bikes;