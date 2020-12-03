import React from 'react'
import hamburger from '../assets/icons/hamburger.svg'
import logo from '../assets/icons/logo.svg'

export const NavbarMobile = (props) => {
    return (
        <nav className="navbar-mobile" 
            style={{ backgroundColor: props.isDrawerShown ? '#020202' : '#0000004f' }} >
            <img src={hamburger} alt="" onClick={props.toggleDrawer} />
            <img src={logo} alt="logo"/>
        </nav>
    )
}