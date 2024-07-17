import React from 'react';

const NavBar = () => {
    return (
        <div>
            <header className="p-4 navbar bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                            <img className='w-[50px] rounded-full' src="https://asset.brandfetch.io/idQUU5yo5I/idt5D_ZyWe.png" alt="" />
                        </a>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600">Link</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                            </li>
                        </ul>
                    </div>

                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Log in</button>
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default NavBar;