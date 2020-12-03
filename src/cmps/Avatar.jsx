import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import modalArrow from '../assets/icons/modalArrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { onUserLogout } from '../store/actions/userActions'

export const Avatar = (props) => {

    // fix its z index of the modal
    const [isModalShown, setIsModalShown] = useState(false)
    const {loggedInUser} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    const onLogout = () => {
        if(loggedInUser){
            try {
                dispatch(onUserLogout())
                history.replace('/login')
            } catch (err) {
                // show error message
                console.log('there was error loging out', err)
            }
        }
    }

    const variants = {
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
            }
        },
        initial: {
            opacity: 0,
        }
    }
    
    return (
        <motion.div className="avatar-container"
            onHoverStart={ () => setIsModalShown(true) }
            onHoverEnd={ () => setIsModalShown(false) }
        >
            <div>
                <div className="avatar-img-container">
                    <img src={props.loggedInUser.imgUrl} alt="" />
                </div>
            </div>
            {isModalShown && 
                <motion.div
                        animate="animate"
                        exit="exit"
                        initial="initial"
                        variants={variants}
                        className="arrow-container"
                    >
                        <img src={ modalArrow } alt=""/>
                        <div className="avatar-modal">
                            <div className="avatar-modal-el-container">
                                <h4>Hi {loggedInUser.fullName}</h4>
                                <div className="logout-container">
                                    <div className="line-through"></div>
                                    <button onClick={ onLogout }>Log out</button>
                                </div>
                            </div>
                        </div>
                </motion.div>
            }
        </motion.div>
    )
}
