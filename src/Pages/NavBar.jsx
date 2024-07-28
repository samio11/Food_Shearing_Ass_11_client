import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
const NavBar = () => {
    const navigate = useNavigate();
    const {user,logOut} = useContext(ContextProvider);
    console.log(user)
    const handleLogOut =async () =>{
        try{
           await logOut()
            toast.success('Logged Out Successfully')
        }
        catch(error){
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
        <li className="flex lg:hidden">
            <NavLink
                to="login"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-600 border-yellow-600" : "flex items-center px-4 -mb-1 border-b-2 border-transparent"
                }
            >
                LogIn
            </NavLink>
        </li>
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
                        user? <div className='flex justify-center items-center gap-2'>
                            <div className='flex justify-center items-center gap-2 border-2 p-2 rounded-3xl'>
                                <img title={user?.email} src={user?.photoURL || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"} className='w-[40px] h-[40px] rounded-full' alt={user?.displayName} />
                                <p className='text-xs font-bold text-yellow-500'>{user?.displayName}</p>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-outline btn-warning">Log Out</button>
                        </div> : 
                         <button onClick={()=>navigate('/login')} className="btn btn-outline btn-warning">Log in</button>
                       }
                    </div>

                    <div className='lg:hidden dropdown w-full flex justify-end'>
                        <div>
                            <button tabIndex={0} className="p-4 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default NavBar;