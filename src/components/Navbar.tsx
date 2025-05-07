import { AlignJustify, Archive, House, NotebookPen, Search, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useRef, useState} from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navActiveRef = useRef(null);
    const menuRef = useRef(null);

    
    return (
        <div className=' w-screen flex flex-col items-center'>
            <div className='flex items-center justify-between w-3/4 max-md:w-full bg-base-100  p-3 rounded-sm  m-2 h-15 z-50 '>

                <Link to='/notes' className='flex items-center font-bold text-2xl'> <NotebookPen className='text-secondary'/>BLOCK<span className='text-primary'>NOTE</span></Link>
                
                {/* Nav items*/}
                <nav  className='flex justify-between max-lg:hidden'>
                    <ul className='flex gap-x-8 text-lg'>
                        <li>
                            <NavLink 
                            className='font-semibold'
                            style={({ isActive }) => ({
                                    color: isActive
                                    ? 'var(--color-primary)'
                                    : '',
                                })} to='/'> Acceuil</NavLink>
                        </li>

                        <li>
                            <NavLink 
                            className='font-semibold'
                            style={({ isActive }) => ({
                                    color: isActive
                                    ? 'var(--color-primary)': ''
                                    })} to='/notes'>Notes</NavLink>
                        </li>

                        <li>
                            <NavLink 
                            className='font-semibold' 
                            style={({ isActive }) => ({
                                    color: isActive
                                    ? 'var(--color-primary)'
                                    : '',
                                    })} to='/archives'>Archives</NavLink>
                        </li>

                    </ul>
                    
                </nav>

                {/*Search Btn */}                    
                    
                <button 
                    ref={navActiveRef} 
                    className='cursor-pointer lg:hidden' 
                    onClick={() => setIsMenuOpen(true)}
                >
                    <AlignJustify />
                </button>
                <label className=' max-lg:hidden flex items-center border border-base-300 group rounded-4xl'>
                   
                    <input 
                    type="text" 
                    className='w-0 group-hover:w-80 transition-all duration-500 outline-0 group-hover:p-3'
                    placeholder='Rechercher une note'
                    />
                    <Search className='text-primary group-hover:text-base-100 group-hover:bg-primary p-2 w-10 h-10 rounded-4xl cursor-pointer'/>
                </label>           
                
                {/* Mobile Menu */}
                <div 
                    ref={menuRef}
                    className='lg:hidden fixed h-screen top-0 right-0 transition-all duration-300 ease-in-out flex flex-col  gap-y-4 bg-base-100 shadow-2xl w-3/4 p-4'
                    style={{transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'}}               
                    >
                    <div className='flex justify-between w-full'>
                        <h1 className='font-bold text-xl'>Menu</h1>
                        <button
                        onClick={() => setIsMenuOpen(false)}
                        ><X/></button>
                    </div>
                    <label className="input w-full">
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
                            <li >
                                <NavLink
                                className='flex items-center w-full p-2 rounded-lg font-semibold'
                                onClick={()=>setIsMenuOpen(false)} 
                                style={({ isActive }) => ({
                                        background: isActive
                                        ? 'var(--color-primary)': '',
                                        color: isActive ? 'white':''
                                        })} to='/'> <House className='mr-3 w-4 h-4'/> Acceuil</NavLink>
                            </li>

                            <li className=' '>
                                <NavLink
                                className='flex items-center w-full p-2 rounded-lg font-semibold'
                                onClick={()=>setIsMenuOpen(false)} 
                                style={({ isActive }) => ({
                                        background: isActive
                                        ? 'var(--color-primary)': '',
                                        color: isActive ? 'white':''
                                        })} to='/notes'><NotebookPen className='mr-3 w-4 h-4' /> Notes</NavLink>
                            </li>

                            <li >
                                <NavLink
                                    className='flex items-center w-full p-2 rounded-lg font-semibold'
                                    onClick={()=>setIsMenuOpen(false)} 
                                    style={({ isActive }) => ({
                                            background: isActive
                                            ? 'var(--color-primary)': '',
                                            color: isActive ? 'white':''
                                            })} to='/archives'><Archive className='mr-3  w-4 h-4' /> Archives</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>                            
            </div>
                                    
        </div>
    );
};

export default Navbar;