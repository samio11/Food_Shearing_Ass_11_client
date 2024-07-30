import React from 'react';
import { FaBowlFood, FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange, MdOutlineHourglassTop } from 'react-icons/md';
import { FaNotesMedical } from "react-icons/fa6";
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodInfo = () => {
    const data = useLoaderData();
    console.log(data)
    const navigate = useNavigate()
    return (
        <div>
            <div className='w-full flex-col md:flex-row flex justify-center items-center my-5'>
                <div className='flex-1 w-full'>
                    <h2 className='text-center text-2xl font-semibold italic text-orange-500'>Food Preview</h2>
                    <div className='w-full h-auto md:h-[400px] flex justify-center items-center'>
                        <div className='w-[90%] h-[90%] flex justify-center items-center gap-5 shadow-lg'>
                            <div className='flex-1'>
                                <img className='rounded-lg w-full h-full' src={data.Food_Image} alt={data.Food_Name} />
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><FaBowlFood size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs text-gray-500 italic'>{data?.Food_Name}</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><MdOutlineHourglassTop size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs text-gray-500 italic'>{data?.Food_Quantity}</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><FaMapLocationDot size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs text-gray-500 italic'>{data?.Pickup_Location}</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><MdDateRange size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs text-gray-500 italic'>{data?.Expired_Date_Time}</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><FaNotesMedical size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs text-gray-500 italic'>{data?.Additional_Notes}</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-4'>
                                        <button className='btn btn-outline btn-warning'>Request Food</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 w-full pl-3 border-l-4 border-orange-500'>
                    <h2 className='text-center text-2xl font-semibold italic text-orange-500'>Owner Info</h2>
                    <div className='w-[80%] h-[80%] flex justify-center items-center my-5'>
                        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="object-cover w-full h-56" src={data?.Donator?.Image} alt={data?.Donator?.Name} />

                            <div className="py-5 text-center">
                                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{data?.Donator?.Name}</a>
                                <span className="text-sm text-gray-700 dark:text-gray-200">Email:- {data?.Donator.Email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <button onClick={()=> navigate(-1)} className='btn btn-warning btn-outline btn-wide'>Back to Home</button>
            </div>
        </div>
    );
};

export default FoodInfo;