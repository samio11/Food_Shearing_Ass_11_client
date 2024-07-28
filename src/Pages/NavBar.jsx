import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
const NavBar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(ContextProvider);
    const [theme, setTheme] = useState('light')
    const handleThemeChange = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleLogOut = async () => {
        try {

            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/logout`,{ withCredentials: true })
            if (data) {
                await logOut()
                toast.success('Logged Out Successfully')
            }
        }
        catch (error) {
            toast.error('Error Loggin Out')
        }
    }
    const navLinks = <>
        <li className="flex">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-600 border-yellow-600" : "flex items-center px-4 -mb-1 border-b-2 border-transparent"
                }
            >
                Home
            </NavLink>
        </li>
        <li className="flex">
            <NavLink
                to="available_foods"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-600 border-yellow-600" : "flex items-center px-4 -mb-1 border-b-2 border-transparent"
                }
            >
                Available Foods
            </NavLink>
        </li>

        {
            user ? <li className='flex lg:hidden'>
                <button onClick={handleLogOut} className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-400">
                    Log Out
                </button>
            </li> : <li className="flex lg:hidden">
                <NavLink
                    to="login"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-600 border-yellow-600" : "flex items-center px-4 -mb-1 border-b-2 border-transparent"
                    }
                >
                    LogIn
                </NavLink>
            </li>
        }
    </>
    return (
        <div>
            <header className="p-4 navbar bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                            <img className='w-[50px] rounded-full' src="https://asset.brandfetch.io/idQUU5yo5I/idt5D_ZyWe.png" alt="" />
                        </a>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    {/* Condition wise login here */}
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {
                            user ? <div className='flex justify-center items-center gap-4'>
                                <div className='flex justify-center items-center gap-2 border-2 p-2 rounded-3xl'>
                                    <img referrerPolicy='no-referrer' title={user?.email} src={user?.photoURL || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"} className='w-[40px] h-[40px] rounded-full' alt={user?.displayName} />
                                    <p className='text-xs font-bold text-yellow-500'>{user?.displayName}</p>
                                </div>
                                <div>
                                    <label className="swap swap-rotate">
                                        {/* this hidden checkbox controls the state */}
                                        <input onChange={handleThemeChange} type="checkbox" className="theme-controller" value="synthwave" />
                                        {/* sun icon */}
                                        <svg
                                            className="swap-off h-10 w-10 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                        </svg>

                                        {/* moon icon */}
                                        <svg
                                            className="swap-on h-10 w-10 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                        </svg>
                                    </label>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-outline btn-warning">Log Out</button>
                            </div> :
                                <button onClick={() => navigate('/login')} className="btn btn-outline btn-warning">Log in</button>
                        }
                    </div>

                    <div className='lg:hidden dropdown w-full flex justify-end z-50'>
                        <div>
                            <button tabIndex={0} className="p-4 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow sm:space-y-5">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default NavBar;