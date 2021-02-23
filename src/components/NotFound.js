import { Link } from "react-router-dom";
import React from 'react';

const NotFound = () => {
    return (
        <div className='grid place-content-center h-96 py-64'>
            <h1>404 - Not Found!</h1>
            <Link className='text-blue-500 my-1' to="/">Go Home</Link>
        </div>
    );
}

export default NotFound
