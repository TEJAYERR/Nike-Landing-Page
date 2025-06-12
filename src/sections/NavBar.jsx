import logo from '../assets/images/header-logo.svg';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { navLinks } from '../data';
import { hamburger } from '../assets/icons';

const NavBar = () =>{
    return(
        <nav>
            <div className="w-full h-[80px] text-gray-500 flex items-center text-[1.12rem] justify-between px-15 fixed top-0 z-50 bg-white/50 rounded-br-md max-sm:px-5">
                <a href='#home' className="logo cursor-pointer">
                    <img src={logo} alt="logo" />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((items)=>
                        <li key={items.label}> 
                            <a href={items.href}>{items.label}</a>
                        </li>
                    )}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="no" width={25} height={25}/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;