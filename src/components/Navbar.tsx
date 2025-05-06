import { AlignJustify, NotebookPen, Search, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navActiveRef = useRef(null);
    const menuRef = useRef(null);

    return (
        <div className=' w-screen flex flex-col items-center'>
            <div className='flex  items-center justify-between w-3/4 max-md:w-full bg-base-100  p-3 rounded-sm shadow-lg m-2 h-15 '>

                <Link to='/notes' className='flex font-bold'> <NotebookPen className='text-secondary'/>BLOCK<span className='text-primary'>NOTE</span></Link>
                
                {/* Nav items*/}
                <nav  className='flex justify-between max-md:hidden'>
                    <ul className='flex gap-x-3'>
                        <li>
                            <NavLink 
                            style={({ isActive }) => ({
                                    color: isActive
                                    ? 'orange'
                                    : '',
                                })} to='/'>Acceuil</NavLink>
                        </li>

                        <li>
                            <NavLink 
                            style={({ isActive }) => ({
                                    color: isActive
                                    ? 'orange': ''
                                    })} to='/notes'>Notes</NavLink>
                        </li>

                        <li>
                            <NavLink style={({ isActive }) => ({
                                    color: isActive
                                    ? 'orange'
                                    : '',
                                    })} to='/archives'>Archives</NavLink>
                        </li>

                    </ul>
                    
                </nav>

                {/*Search Btn */}                    
                <button  className='relative group cursor-pointer max-md:hidden'>
                    <Search className='group-hover:text-secondary'/>
                    <div className='flex shadow-md p-4 bg-base-100 rounded-lg w-[350px]  absolute left-[-220px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                            </svg>
                            <input type="search" className="grow" placeholder="Search" />
                        </label>
                        </div>
                </button>

                {/* Mobile Menu */}                    
                <button 
                    ref={navActiveRef} 
                    className='cursor-pointer md:hidden' 
                    onClick={() => setIsMenuOpen(true)}
                >
                    <AlignJustify />
                </button>

                {/* Mobile Menu */}
                <div 
                    className='fixed h-screen top-0 -right-100 flex flex-col items-center gap-y-4 bg-base-100 shadow-2xl w-3/4 p-4'
                                   
                >
                    <div className='flex justify-between w-full'>
                        <h1>Menu</h1>
                        <button><X/></button>
                    </div>
                    <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                            </svg>
                            <input type="search" className="grow" placeholder="Search" />
                    </label>
                    <nav >
                        <ul className='flex flex-col gap-y-3'>
                            <li>
                                <NavLink 
                                style={({ isActive }) => ({
                                        color: isActive
                                        ? 'orange'
                                        : '',
                                    })} to='/'>Acceuil</NavLink>
                            </li>

                            <li>
                                <NavLink 
                                style={({ isActive }) => ({
                                        color: isActive
                                        ? 'orange': ''
                                        })} to='/notes'>Notes</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => ({
                                        color: isActive
                                        ? 'orange'
                                        : '',
                                        })} to='/archives'>Archives</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>    
                    
                                        
            </div>
                                    
        </div>
    );
};

export default Navbar;