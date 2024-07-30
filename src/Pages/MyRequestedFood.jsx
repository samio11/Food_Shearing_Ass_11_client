import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MyRequestedFood = () => {
    const [loadData, setLoadData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/my_requested_food`, { withCredentials: true })
        setLoadData(data)
    }
    return (
        <div>
            <Helmet>
                <title>ShareByte | Requested Food</title>
            </Helmet>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No of food</th>
                                <th>Requested food name</th>
                                <th>Requested food Image</th>
                                <th>Donar Name</th>
                                <th>Donar Email</th>
                                <th>Donar Image</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadData?.map((x, idx) => {
                                    return (
                                        <tr key={x._id}>
                                            <td>{idx + 1}</td>
                                            <td>{x.Food_Name}</td>
                                            <td><img className='w-[50px] h-[50px] rounded-lg' src={x.Food_Image} alt="" /></td>
                                            <td>{x.Donator?.Name}</td>
                                            <td>{x.Donator?.Email}</td>
                                            <td><img className='w-[50px] h-[50px] rounded-lg' src={x?.Donator?.Image} alt="" /></td>
                                            <td>{x.Pickup_Location}</td>
                                            <td>{x.Expired_Date_Time}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRequestedFood;