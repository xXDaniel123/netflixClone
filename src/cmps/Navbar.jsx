import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar } from './Avatar'
import logo from '../assets/icons/logo.svg'

export function Navbar() {

    const [navbarClass, setNavbarClass] = useState('navbar')
    const { loggedInUser } = useSelector(state => state.userReducer)
    
    useEffect(() => {
        window.addEventListener('scroll', getNavbarBg)
        return () => {
            window.removeEventListener('scroll', getNavbarBg)
        }
    }, [])

    const getNavbarBg = () => {
        if (window.pageYOffset >= 5) setNavbarClass('navbar bg')
        else setNavbarClass('navbar')
    }

    return (
            <nav className={navbarClass}>
                <div className="logo-links-container">
                    <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
                    <Link to='/browse'>Home</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className="search-profile-contianer">
                    {(loggedInUser) ? <Avatar loggedInUser={ loggedInUser } /> : <Link to='/login'>Login & Signup</Link> }
                </div>
            </nav>
    )
}
