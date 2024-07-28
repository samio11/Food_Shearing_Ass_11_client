import Lottie from 'lottie-react';
import React from 'react';
import err from './ErrorAni.json'
import { useNavigate } from 'react-router-dom';

const ErrorElement = () => {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-full h-full'>
                <Lottie className='w-[80%] h-[80%] mx-auto' animationData={err}></Lottie>
                <div className='flex justify-center items-center'>
                    <button onClick={() => navigate(-1)} className='btn btn-outline btn-error btn-wide mx-auto'>Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;