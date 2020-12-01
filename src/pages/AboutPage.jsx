import React from 'react'
import { motion } from 'framer-motion'

export const AboutPage = () => {

    const variants = {
        animate: {
            opacity: 1,
            y: 200
        },
        exit: {
            opacity: 0,
            y: 230
        },
        initial: {
            opacity: 0,
            y: 230
        }
    }

    const pageTransition={
        duration: 0.35,
        ease: 'easeOut'
    }

    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={variants}
            transition={pageTransition}
        >
            <div className="inner-footer-contianer about-container">
                <h4>This demo site was developed with ❤️ by Daniel Dante</h4>
                <p>Using React, Redux, Sass, Node, Express, Framer-Motion, Swiper js, Google OAuth, MongoDB, Formik</p>
                <div className="footer-links-container">
                    <div>
                        <a target="blank" href="https://www.linkedin.com/in/daniel-dante-61889b184/"><img style={{ width: '25%', marginRight: '1rem' }} src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747720/white-linkedin-icon-transparent-background-28_n5l9wn.png" alt="" /><p>Linkedin</p> </a>
                    </div>
                    <div>
                        <a target="blank" href="https://github.com/xXDaniel123"><img style={{ width: '25%', marginRight: '1rem' }} src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1606747481/github-icon-white-6_lajeqf.png" alt="" /><p>Github</p></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

