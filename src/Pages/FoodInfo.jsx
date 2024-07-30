import React, { useContext, useState } from 'react';
import { FaBowlFood, FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange, MdOutlineHourglassTop } from 'react-icons/md';
import { FaNotesMedical } from "react-icons/fa6";
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ContextProvider } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const FoodInfo = () => {
    const data = useLoaderData();
    const { user } = useContext(ContextProvider)

    const [startDate, setStartDate] = useState(new Date());

    const navigate = useNavigate()

    const handleGetData = async e => {
        e.preventDefault()
        const form = e.target;
        const deletedId = data?._id;
        const req_name = user?.displayName;
        const req_email = form.r_email.value;
        const req_photo = user?.photoURL;
        const food_name = form.food_name.value;
        const food_image = data?.Food_Image;
        const food_quantity = parseInt(form.food_quantity.value);
        const expire_date = data?.Expired_Date_Time;
        const additional_note = form.description.value;
        const location = form.location.value;
        const Status = 'requested';
        const Donator = {
            Name: data?.Donator.Name,
            Email: data?.Donator.Email,
            Image: data?.Donator.Image
        }
        const totalData = { Food_Name: food_name, Food_Image: food_image, Food_Quantity: food_quantity, Pickup_Location: location, Expired_Date_Time: expire_date, Additional_Notes: additional_note, Donator, Status, req_name, req_email, req_photo }
        console.log(totalData)
        if (req_email === data?.Donator.Email) {
            return toast.error("You Cant Have Request You Added")
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/food_request`, totalData)
            if (data) {
                console.log('insert Done', data)
                const deletedFromPrev = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/food_info/${deletedId}`)
                if (deletedFromPrev.data) {
                    console.log(deletedFromPrev.data)
                    toast.success("Request Sent Successfully")
                    // It will Change 
                    navigate('/added_food_manage')
                }
            }
        }
        catch (error) {
            toast.error("Failed To Send Request For Food")
            console.error(error)
        }
    }
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
                                        {/* The button to open modal */}
                                        <label htmlFor="my_modal_7" className="btn btn-outline btn-warning">Request Food</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="modal-box">
                                                <form onSubmit={handleGetData}>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food_name">
                                                            Food Name
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="text"
                                                            defaultValue={data?.Food_Name}
                                                            disabled
                                                            name='food_name'
                                                            placeholder="Enter Food Name"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food_image">
                                                            Food Image Url
                                                        </label>
                                                        <input
                                                            id="jobTitle"
                                                            type="text"
                                                            defaultValue={data?.Food_Image}
                                                            disabled
                                                            name='food_image'
                                                            placeholder="Enter Url of Food Image"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food_id">
                                                            Food ID
                                                        </label>
                                                        <input
                                                            id="jobTitle"
                                                            type="text"
                                                            defaultValue={data?._id}
                                                            disabled
                                                            name='food_image'
                                                            placeholder="Enter Url of Food Image"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food_quantity">
                                                            Food Quantity
                                                        </label>
                                                        <input
                                                            id="jobTitle1"
                                                            type="text"
                                                            defaultValue={data?.Food_Quantity}
                                                            disabled
                                                            name='food_quantity'
                                                            placeholder="Enter Food Quantity"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expire_date">
                                                            Expire Date
                                                        </label>
                                                        {/* date */}
                                                        <DatePicker className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' disabled selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                                            Additional Note
                                                        </label>
                                                        <textarea
                                                            id="description"
                                                            name='description'
                                                            defaultValue={data?.Additional_Notes}
                                                            placeholder="Please enter description"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            rows="3"
                                                        ></textarea>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                                            Pick Up Location
                                                        </label>
                                                        <input
                                                            id="minPrice"
                                                            name='location'
                                                            defaultValue={data?.Pickup_Location}
                                                            disabled
                                                            type="text"
                                                            placeholder="Enter Location"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="d_name">
                                                            Donator Name
                                                        </label>
                                                        <input
                                                            id="minPrice"
                                                            name='d_name'
                                                            defaultValue={data?.Donator?.Name}
                                                            disabled
                                                            type="text"
                                                            placeholder="Enter Location"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="d_email">
                                                            Donator Email
                                                        </label>
                                                        <input
                                                            id="minPrice"
                                                            name='d_email'
                                                            defaultValue={data?.Donator?.Email}
                                                            disabled
                                                            type="text"
                                                            placeholder="Enter Location"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="r_email">
                                                            Requester Email
                                                        </label>
                                                        <input
                                                            id="minPrice"
                                                            name='r_email'
                                                            defaultValue={user?.email}
                                                            disabled
                                                            type="text"
                                                            placeholder="Enter Location"
                                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <button
                                                            type="submit"
                                                            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                        </div>
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
                <button onClick={() => navigate(-1)} className='btn btn-warning btn-outline btn-wide'>Back to Home</button>
            </div>
        </div>
    );
};

export default FoodInfo;