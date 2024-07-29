import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { IoFastFood } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { RiUserSharedLine } from "react-icons/ri";

const Home = () => {
    const [food, setFood] = useState([]);
    const sortedTopSix = [];
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/feature_food`);
                setFood(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);
    const sortedItem = [...food].sort((a, b) => b.Food_Quantity - a.Food_Quantity)
    for(let i = 0; i < sortedItem.length; i++)
    {
        if(i < 6)
        {
            sortedTopSix.push(sortedItem[i])
        }
        else
        {
            break;
        }
    }
    console.log(sortedTopSix)
    return (
        <div>
            <Helmet>
                <title>ShareByte | Home</title>
            </Helmet>
            {/* for slider */}
            <div>
                <Slider></Slider>
            </div>
            <div className='w-[80%] h-[100px] bg-slate-100 mx-auto my-5 md:my-16 flex justify-evenly items-center rounded-lg gap-5'>
                <div>
                    <IoFastFood className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-sm'>Reduce Food Waste</h2>
                </div>
                <div>
                    <TbCirclesRelation className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-sm'>Community Building</h2>
                </div>
                <div>
                    <RiUserSharedLine className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-sm'>Convenient Sharing</h2>
                </div>
            </div>
            {/* Featured Card */}
            <div>
                Feture Food
            </div>
        </div>
    );
};

export default Home;