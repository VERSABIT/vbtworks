// src/components/Header.tsx
import React, {useState} from 'react';
import {Link}            from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo              from "../assets/VersabitIcon.png";
import ButtonHelper      from "./ButtonHelper";
import {faArrowRight}    from "@fortawesome/free-solid-svg-icons";
import "../assets/css/index.css"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const contactUs = () => {
        console.log('Contact Us');
    };

    return (
        <header
            className="flex justify-between items-center top-0 w-full h-16 bg-white/80  sm:pr-10 sm:pl-10 md:px-36 " style={{ paddingRight: "1.0rem", paddingLeft: "1.0rem"}}>
            <div className="text-2xl font-bold ">
                <Link to="/">
                    <img src={logo} alt="Versabit" className="w-auto h-10 object-cover"/>
                </Link>
            </div>
            <nav className="hidden md:flex space-x-12 items-center hover:text-gray-500">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/services" className="hover:text-blue-500">Services</Link>
                <Link to="/about-us" className="hover:text-blue-500">About Us</Link>
                {/* <Link to="/crm" className="hover:text-blue-500" onClick={toggleMenu}>CRM</Link> */}

            </nav>
            {isOpen ? " " :
                <Link to="/contact"
                      className="btn-primary">
                    <ButtonHelper text={'Contact us'} className={"btn-primary"} onClick={contactUs}
                                  icon={faArrowRight}/>
                </Link>}

            <button className="md:hidden text-4xl text-white-700" onClick={toggleMenu}>
                {isOpen ? <FaTimes/> : <FaBars/>}
            </button>
            {isOpen && (
                <div
                    className="md:hidden fixed top-16 right-0 w-full h-1/4 bg-white shadow-lg rounded-l-lg p-12 z-50">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Home</Link>
                        <Link to="/services" className="hover:text-blue-500" onClick={toggleMenu}>Services</Link>
                        <Link to="/about-us" className="hover:text-blue-500" onClick={toggleMenu}>About Us</Link>
                        <Link to="/crm" className="hover:text-blue-500" onClick={toggleMenu}>CRM</Link>
                        {/* <Link to="/contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact Us</Link> */}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
