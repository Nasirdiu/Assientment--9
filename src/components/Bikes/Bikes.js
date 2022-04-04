import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalf} from '@fortawesome/free-solid-svg-icons';
import './Bikes.css'
const Bikes = (props) => {
    const {name,img,review,ratings}=props.bike;
    return (
        <div className='bikes'>
            <h4>{name}</h4>
            <div>
                <img className='img-fluid w-50 img-bikes' src={img} alt="" />
            </div>
            <p>Review:-{review.slice(0,100)}</p>
            <h6>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
            
            {ratings}</h6>
        </div>
    );
};

export default Bikes;