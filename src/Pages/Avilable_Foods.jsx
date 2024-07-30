import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBowlFood, FaMapLocationDot } from 'react-icons/fa6';
import { MdDateRange, MdOutlineHourglassTop } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Avilable_Foods = () => {
    const [loadData, setLoadData] = useState([])
    const [itemPerPage, setItemPerPage] = useState(3)
    const [totalDataCount, setTotalDataCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/available_food`)
        setLoadData(data)
        setTotalDataCount(data.length)
    }

    useEffect(() => {
        getPageData();
    }, [currentPage, itemPerPage, sort,search])

    const getPageData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/filtered_food?page=${currentPage}&size=${itemPerPage}&sort=${sort}&search=${search}`)
        setLoadData(data)
    }



    console.log(loadData)
    const numberOfPages = Math.ceil(totalDataCount / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(x => x + 1)
    console.log(currentPage)
    console.log(loadData)

    const handleChange = e => {
        setItemPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }
    const handleChangeSort = e => {
        setSort(e.target.value)
        setCurrentPage(1)
    }
    const handleSearch = e =>{
        e.preventDefault();
        const text = e.target.searchBox.value;
        setSearch(text);
    }
    return (
        <div className='space-y-8'>
            <Helmet>
                <title>ShareByte | Avilable Food</title>
            </Helmet>
            <div className='w-full my-4 flex flex-col-reverse md:flex-row justify-around items-center gap-2'>
                <div className='p-2 border-orange-500 rounded-lg'>
                    <select value={itemPerPage} onChange={handleChange}>
                        {/* <option value=''>Select your Layout</option> */}
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>
                <div className='p-2 border-orange-500 rounded-lg'>
                    <select value={sort} name='sort' id='sort' onChange={handleChangeSort}>
                        <option value=''>Sort By Expire Date</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>
                <div>
                    <form onSubmit={handleSearch} className="px-4 w-full max-w-[330px]">
                        <label
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            htmlFor="default-search"
                        >Search</label
                        >
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                >
                                    <path
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                required=""
                                placeholder="Search"
                                name='searchBox'
                                className="block w-full p-4 py-5 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="default-search"
                                type="search"
                            />
                            <button
                                className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                    ></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    loadData?.map((x, idx) => {
                        return (
                            <div key={x._id}>
                                <div className='flex justify-center items-center gap-2 shadow-lg'>
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
                                                <Link to={`/food_info/${x._id}`} className='btn btn-outline btn-warning'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full flex justify-center items-center gap-4'>
                {
                    pages.map((page, idx) => {
                        return (
                            <button key={idx} className={`btn btn-primary ${currentPage === page ? 'btn btn-outline btn-warning' : 'btn btn-warning'}`} onClick={() => setCurrentPage(page)}>
                                {page}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Avilable_Foods;