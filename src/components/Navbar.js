import React from 'react'
import './Navbar.css'
import Logo from '../images/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar () {
    const [open, setOpen] = React.useState(false)
  return (
    <div className="navbar">
        <div className="logo">
            <img src={Logo} alt="tmp"></img>
        </div>
        
        <ul className={open ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"><a href='/'>Home</a></li>
            <li className="nav-item"><a href='/'>About</a></li>
            <li className="nav-item"><a href='/'>FAQ</a></li>
            <li className="nav-item"><a href='/'>Contact</a></li>
        </ul>
        <div className="hamburger">
            {open ? <FaTimes size={30} style={{color: '#f8f8f8'}} onClick={() => setOpen(false)} /> : <FaBars size={30} style={{color: '#f8f8f8'}} onClick={() => setOpen(true)} />}
        </div>

    </div>
  )
}
