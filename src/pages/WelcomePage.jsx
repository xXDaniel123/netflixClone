import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'

export const WelcomePage = () => {


    const variants = {
        animate: {
            opacity: 1,
            y: 0
        },
        initial: {
            opacity: 0,
            y: 70
        }
    }

    return (
        <div className="welcome-page-container" >
            <div className="background-container">
                <div className="black-screen mobile-black-screen"></div>
                <img src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1605007211/hero_image_lnjtd8.jpg" alt="" />
            </div>
            <motion.div className="directions-container"
                animate="animate"
                initial="initial"
                variants={variants}
                transition={{ duration: 0.4, ease: 'easeOut'}}
            >
                <motion.img 
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }} 
                    style={{ minWidth: '10rem' }}
                    src={logo} alt="logo"/>
                <motion.h2
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
                    style={{ lineHeight: 1.4, padding: '0 10vw' }}
                >Welcome to my Netflix Clone, MOVIFY</motion.h2>
                <motion.div 
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.425 }}
                    className="directions-buttons-container"
                    >
                    <Link to='browse'><button>Enter as Guest</button></Link>
                    <Link to='login'><button>login & Signup</button></Link>
                </motion.div>
            </motion.div>
            <div className="black-gradient" style={{ zIndex: -1 }}></div>
        </div>
    )
}