import React, { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Logo from '../images/logo1.png';
import {Link} from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false); //dropdown

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark" style={{
                backgroundColor: "#02B7B8",
                fontSize: "30px", fontFamily: "Times New Roman, Times, Fantasy"
            }}>
                <div class="container-fluid">
                    <a className="navbar-brand mb-0 h1" aria-current="page" href="#">Energy System</a>
                    <ul className="nav justify-content-end" >

                        <li className="nav-item">
                            <a className="navbar-brand" aria-current="page" href="/"><i className="fa fa-home"></i> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="about"><FaPencilAlt size={17} /> About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="/contact"><HiPhone size={17} /> Contact Us</a>
                        </li>
                        <li className="nav-item" style={{position: 'relative'}}>
                            
                            <a className="navbar-brand" href="#" onClick={() => setIsOpen(open => !open)}><BiLogInCircle size={17} /> Login</a>
                            {/* Dropdown */}
                            <div style={{position: 'absolute', top: '100%', left: 0, transform: `scaleY(${isOpen ? 1 : 0})`,transformOrigin: 'top', transition: '.3s'}} className="bg-white p-3">
                                <a href="/customerLogin" className="d-block h6">Customer</a>
                                <Link to ="/adminLogin" className="d-block h6">Admin</Link>

                            </div>
                          
                            
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="/faq" ><RiQuestionAnswerLine size={17} /> FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );

}

export default Header