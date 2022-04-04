import React from 'react';
import './Bikes.css'
const Bikes = (props) => {
    console.log(props.bike);
    const {name,img,review}=props.bike;
    return (
        <div className='bikes'>
            <h6>Name:-{name}</h6>
            <div>
                <img className='img-fluid w-50 img-bikes' src={img} alt="" />
            </div>
            <p>Review:-{review.slice(0,100)}</p>
        </div>
    );
};

export default Bikes;