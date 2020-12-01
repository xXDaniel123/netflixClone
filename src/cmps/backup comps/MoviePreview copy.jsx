import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
// import { useSelector } from 'react-redux'
import { useHistory, Route } from 'react-router-dom'

import { MoviePreviewControls } from './MoviePreviewControls'
import { useSelector, useDispatch } from 'react-redux'
import { MovieDetails } from './MovieDetails'
import { disableJumbotronVideo } from '../store/actions/videoActions'


export function MoviePreview(props) {

    const [currentTrailer, setCurrentTrailer] = useState(null)

    const { isJumboTronCanPlay } = useSelector(state => state.videoReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const trailerRef = useRef(null)
    let currTimeOut;

    useEffect(() => {
        if (currentTrailer) startTrailer()
    }, [currentTrailer])

    const startTrailer = () => {
        setTimeout(() => {
            if (trailerRef.current) {
                trailerRef.current.play()
            }
        }, 500)
    }

    const onHoverPreview = (id) => {
        currTimeOut = setTimeout(() => {
            setCurrentTrailer(id)
            dispatch(disableJumbotronVideo())
        }, 500)
    }

    const onHoverPreviewEnd = () => {
        setCurrentTrailer(null)
        if (currTimeOut) clearTimeout(currTimeOut)
    }

    const onMovieClick = () => {
        onHoverPreviewEnd()
        history.push(`/${props.id}`)
    }

    const easing = [0.6, 0.05, 0.01, 1]

    const variants = {
        animate: {
            opacity: 1,
            scale: 1.65,
            backgroundColor: '#141414',
        },
        initial: {
            scale: 1,
            opacity: 1,
            originX: 0.5,
            originY: 0.5,
            top: 0,
            left: 0
        },
        exit: {
            scale: 1,
            opacity: 1,
            top: 0,
            left: 0,
            backgroundColor: '#14141400',
            transition: {
                duration: .3,
                ease: easing
            }
        }
    }

    const controlsVariants = {
        exit: {
            scale: 1,
            opacity: 0,
            top: 0,
            left: 0,
            backgroundColor: '#14141400',
            transition: {
                duration: .3,
                ease: easing
            }
        }
    }

    const imgVariants = {
        exit: {
            scale: 1,
            opacity: 1,
            top: 0,
            left: 0,
            transition: {
                duration: .3,
                ease: easing
            }
        }
    }

    return (
        <React.Fragment>
            <motion.div className="movie-container"
                onHoverStart={() => onHoverPreview(props.id)}
                onHoverEnd={() => onHoverPreviewEnd()}
                onClick={() => onMovieClick()}
            >
                <motion.img src={props.imgURL} alt={props.name} />
                <AnimatePresence exitBeforeEnter>
                    {currentTrailer &&
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="movie-container trailer"
                            onClick={() => onMovieClick()}
                        >
                            <motion.div className="img-vid-container">
                                {
                                    <React.Fragment>
                                        <motion.video poster={props.imgURL} ref={trailerRef} >
                                            {/* <img src={props.imgURL} alt=""/> */}
                                            <source src={props.trailerURL} />
                                        </motion.video>
                                    </React.Fragment>
                                }
                            </motion.div>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={controlsVariants}>
                                <MoviePreviewControls genre={props.genre} name={props.name} />
                            </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </React.Fragment>
    )
} 
