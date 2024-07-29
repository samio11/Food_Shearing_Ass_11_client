import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { IoFastFood } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { RiUserSharedLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineHourglassTop } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import faqAni from './food_faq.json'
import Lottie from 'lottie-react';
// ..
AOS.init();
const Home = () => {
    const [food, setFood] = useState([]);
    const navigate = useNavigate()
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
    for (let i = 0; i < sortedItem.length; i++) {
        if (i < 6) {
            sortedTopSix.push(sortedItem[i])
        }
        else {
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
            {/* Feature for Website Section */}
            <div data-aos="fade-down-right" className='w-[80%] h-[100px] bg-slate-100 mx-auto my-5 md:my-16 flex justify-evenly items-center rounded-lg'>
                <div>
                    <IoFastFood className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-xs md:text-sm text-center'>Reduce Food Waste</h2>
                </div>
                <div>
                    <TbCirclesRelation className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-xs md:text-sm text-center'>Community Building</h2>
                </div>
                <div>
                    <RiUserSharedLine className='mx-auto' size={30} color="#ff9f1c" />
                    <h2 className='text-xs md:text-sm text-center'>Convenient Sharing</h2>
                </div>
            </div>
            {/* Featured Food Card */}
            <div className='my-5'>
                {/* Implementing Type rewrite */}
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '24px', textAlign: 'center' }}>
                    Our{' '}
                    <span style={{ color: 'orange', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Featured Food', 'Top Rated Food', 'Fresh Food']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {/* Sample test */}

                    {
                        sortedTopSix?.map((x, idx) => {

                            return (
                                <div data-aos="flip-left" key={idx} className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img
                                            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                                            alt="Testimonial avatar"
                                            src={x.Donator?.Image}
                                        />
                                    </div>

                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><IoPerson size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs font-semibold italic'>{x.Donator?.Name} (Doner)</h2>
                                    </div>
                                    <div className='flex items-center gap-2 my-3'>
                                        <h2><MdEmail size={15} color="#ff9f1c" /></h2>
                                        <h2 className='text-xs font-semibold italic'>{x.Donator?.Email}</h2>
                                    </div>
                                    <div className='flex justify-center items-center gap-2'>
                                        {/* Left Part */}
                                        <div className='flex-1'>
                                            <img className='rounded-lg w-full h-[250px]' src={x.Food_Image} alt="" />
                                        </div>
                                        {/* Right Part */}
                                        <div className='flex-1 border-l-2 border-yellow-300 h-[250px] p-2 flex justify-center items-center'>
                                            <div>
                                                <div className='flex items-center gap-2 my-3'>
                                                    <h2><FaBowlFood size={15} color="#ff9f1c" /></h2>
                                                    <h2 className='text-xs text-gray-500 italic'>{x.Food_Name}</h2>
                                                </div>
                                                <div className='flex items-center gap-2 my-3'>
                                                    <h2><MdOutlineHourglassTop size={15} color="#ff9f1c" /></h2>
                                                    <h2 className='text-xs text-gray-500 italic'>{x.Food_Quantity}</h2>
                                                </div>
                                                <div className='flex items-center gap-2 my-3'>
                                                    <h2><FaMapLocationDot size={15} color="#ff9f1c" /></h2>
                                                    <h2 className='text-xs text-gray-500 italic'>{x.Pickup_Location}</h2>
                                                </div>
                                                <div className='flex items-center gap-2 my-3'>
                                                    <h2><MdDateRange size={15} color="#ff9f1c" /></h2>
                                                    <h2 className='text-xs text-gray-500 italic'>{x.Expired_Date_Time}</h2>
                                                </div>
                                                <div className='flex items-center gap-2 my-4'>
                                                    <button className='btn btn-outline btn-warning'>View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )

                        })
                    }
                </div>
                <div className='w-full flex justify-center items-center my-5 md:my-10'>
                    <button onClick={() => navigate(`/available_foods`)} className='btn btn-outline btn-warning btn-wide'>Show All</button>
                </div>
            </div>
            {/* Faq Section */}
            <div className='my-5 md:my-10'>
                <h2 className='text-center text-2xl font-semibold text-orange-500'>FAQ</h2>
                <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5 my-5'>
                    {/* left */}
                    <div data-aos="fade-down-right" className='flex-1'>
                        <Lottie className='w-[full] h-[300px]' animationData={faqAni}></Lottie>
                    </div>
                    {/* Right */}
                    <div data-aos="fade-down-left" className='flex-1'>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">How does the food sharing website work?</div>
                                <div className="collapse-content">
                                    <p>Our food sharing website connects individuals who have surplus food with those who need it. Users can post listings of available food items, including details such as type, quantity, and pick-up location. Those in need can browse these listings and arrange for collection directly with the food donor. Our platform aims to reduce food waste and promote community support.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">Is there a cost involved in using the food sharing service?</div>
                                <div className="collapse-content">
                                    <p>No, our food sharing service is completely free for both donors and recipients. Our goal is to foster a community of generosity and sustainability by making it easy to share surplus food without any financial barriers. We rely on the goodwill of our users and volunteers to keep the platform running.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">What types of food can be shared on the website?</div>
                                <div className="collapse-content">
                                    <p>ou can share a variety of food items, including fresh produce, packaged goods, baked items, and leftovers that are safe for consumption. However, all shared food must comply with local food safety regulations. It's important to provide accurate information about the food's condition, expiration date, and any potential allergens to ensure the safety and satisfaction of recipients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;