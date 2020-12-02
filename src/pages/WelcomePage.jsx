import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const WelcomePage = () => {


    const variants = {
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 100
        },
        initial: {
            opacity: 0,
            y: 100
        }
    }

    return (
        <div className="welcome-page-container">
            <div className="background-container">
                <div className="black-screen"></div>
                <img src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1605007211/hero_image_lnjtd8.jpg" alt="" />
            </div>
            <div className="black-gradient"></div>
            <motion.div className="directions-container"
                exit="exit"
                animate="animate"
                initial="initial"
                variants={variants}
                transition={{ duration: 0.4, ease: 'easeOut'}}
            >
                <motion.img exit="exit"
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }} 
                    style={{ minWidth: '10rem' }}
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
                <motion.h2
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
                >Welcome to my Netflix Clone</motion.h2>
                <motion.div 
                    animate="animate"
                    initial="initial"
                    variants={variants}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.425 }}
                    className="directions-buttons-container">
                    <Link to='browse'><button>Enter as Guest</button></Link>
                    <Link to='login'><button>login & Signup</button></Link>
                </motion.div>
            </motion.div>
        </div>
    )
}