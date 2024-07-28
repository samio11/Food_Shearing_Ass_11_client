import Lottie from 'lottie-react';
import React from 'react';
import err from './ErrorAni.json'
import { useNavigate } from 'react-router-dom';

const ErrorElement = () => {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen'>
            <Lottie className='w-[80%] h-[80%]' animationData={err}></Lottie>
            <button onClick={()=>navigate(-1)} className='btn btn-outline btn-error'>Back</button>
        </div>
    );
};

export default ErrorElement;