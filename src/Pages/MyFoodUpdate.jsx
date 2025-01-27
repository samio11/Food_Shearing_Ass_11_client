import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ContextProvider } from '../Contexts/AuthContext';
import axios, { Axios } from 'axios';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const MyFoodUpdate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(ContextProvider)
    const params = useParams()
    const navigate = useNavigate()
    const dataSelect = useLoaderData();
    console.log(dataSelect)
    const handleGetData = async e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const food_quantity = parseInt(form.food_quantity.value);
        const expire_date = startDate.toLocaleDateString();
        const additional_note = form.description.value;
        const location = form.location.value;
        const Status = 'available';
        const Donator = {
            Name: user?.displayName,
            Email: user?.email,
            Image: user?.photoURL
        }
        const totalData = { Food_Name: food_name, Food_Image: food_image, Food_Quantity: food_quantity, Pickup_Location: location, Expired_Date_Time: expire_date, Additional_Notes: additional_note, Donator, Status }
        console.log(totalData)
        try {
            const { data } =await axios.put(`${import.meta.env.VITE_BACKEND_URL}/my_food/${params.id}`, totalData)
            if (data) {
                toast.success('Your Food Updated Successfully');
                navigate('/added_food_manage')
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <Helmet>
                <title>ShareByte | Update Food</title>
            </Helmet>
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Update My Food</h1>
                <form onSubmit={handleGetData}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food_name">
                            Food Name
                        </label>
                        <input
                            id="email"
                            type="text"
                            defaultValue={dataSelect?.Food_Name}
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
                            name='food_image'
                            defaultValue={dataSelect.Food_Image}
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
                            name='food_quantity'
                            defaultValue={dataSelect.Food_Quantity}
                            placeholder="Enter Food Quantity"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expire_date">
                            Expire Date
                        </label>
                        {/* date */}
                        <DatePicker className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Additional Note
                        </label>
                        <textarea
                            id="description"
                            name='description'
                            defaultValue={dataSelect.Additional_Notes}
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
                            type="text"
                            defaultValue={dataSelect.Pickup_Location}
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
        </div>
    );
};

export default MyFoodUpdate;