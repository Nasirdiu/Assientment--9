import React from 'react';
import Error from '../../Asstes/download.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger '>Page NotFound 404</h1>
            <img className='img-fluid w-50' src={Error}alt="" />
        </div>
    );
};

export default NotFound;