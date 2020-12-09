import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useHistory, Route } from 'react-router-dom'
import { MoviePreviewControls } from './MoviePreviewControls'
import { useSelector, useDispatch } from 'react-redux'
import { MovieDetails } from './MovieDetails'
import { updateUser } from '../store/actions/userActions'

let currTimeOut;

export function MoviePreview(props) {

    const [currentTrailer, setCurrentTrailer] = useState(null)
    const [imgClass, setImgClass] = useState('')
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser)
    const isJumboTronCanPlay = useSelector(state => state.videoReducer.isJumboTronCanPlay)

    const dispatch = useDispatch()
    const history = useHistory()
    const trailerRef = useRef(null)

    useEffect(() => {
        if (currentTrailer) startTrailer()
    }, [currentTrailer])

    const startTrailer = () => {
        setTimeout(() => {
            if (currentTrailer && trailerRef.current) {
                setImgClass('fade-out')
                trailerRef.current.play()
            }
        }, 500)
    }

    const onHoverPreviewStart = (id) => {
        currTimeOut = setTimeout(() => {
            setCurrentTrailer(id)
            dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: false  })
        }, 400)
    }

    const onHoverPreviewEnd = () => {
        setCurrentTrailer(null)
        setImgClass('')
        clearTimeout(currTimeOut)
    }

    const onMovieClick = (ev) => {
        ev.stopPropagation()
        onHoverPreviewEnd()
        history.push(`/browse/${props.id}`)
    }

    const onLikeMovie = (ev, id) => {
        ev.stopPropagation()

        if (!loggedInUser){
            // show error message (please login to create preferences)
            console.log('no user')
        } else {
            if (loggedInUser.moviePref.likedMovies.length) {
                console.log('there are pref')
                // search likedMovies for the same _id for the liked movie
                // if it doesnt exist, send an action to update the user
                loggedInUser.moviePref.likedMovies.push(id)
            } else {
                console.log('no prefs')
                const userToSave = loggedInUser
                userToSave.moviePref.likedMovies.push(id)
                dispatch(updateUser(userToSave))

                // add the movieid to the likedMovie array
                // send the modified user to action called update user ??
            }
        }
        // if there's no user, 
        // send action dispatch to add to like movies in userPref
    }

    const onDislikeMovie = (ev, id) => {
        ev.stopPropagation()
        console.log('disliked', id)
    }

    const easing = [0.6, 0.05, 0.01, 1]

    const variants = {
        animate: {
            opacity: 1,
            scale: 1.65,
            backgroundColor: '#141414',
            transition: {
                duration: .35,
                ease: easing
            }
        },
        initial: {
            scale: 1,
            opacity: 1,
            originX: 0.5,
            originY: 0.75,
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
                duration: .35,
                ease: easing
            }
        }
    }

    const controlsVariants = {
        animateControls: {
            opacity: 1,
            backgroundColor: '#141414',
            borderRadius: '0.35em',
            transition: {
                duration: .35,
                ease: easing
            }
        },
        initialControls: {
            opacity: 0,
            borderRadius: '0.35em',
        },
        exitControls: {
            opacity: 0,
            backgroundColor: '#14141400',
            transition: {
                duration: .3,
                ease: easing
            }
        }
    }

    return (
        <React.Fragment>
            <motion.div className="movie-container"
                onHoverStart={() => onHoverPreviewStart(props.id)}
                onHoverEnd={() => onHoverPreviewEnd()}
                onClick={(ev) => onMovieClick(ev)}
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
                                onClick={(ev) => onMovieClick(ev)}
                            >
                                <motion.div className="img-vid-container">
                                    {
                                    <React.Fragment>
                                        <img className={`poster-img ${imgClass}`} src={props.imgURL} alt=""/>
                                            <motion.video ref={trailerRef} > 
                                                <source src={props.trailerURL} />
                                            </motion.video>
                                    </React.Fragment>
                                    }
                                </motion.div>
                                <motion.div
                                    initial="initialControls"
                                    animate="animateControls"
                                    exit="exitControls"
                                    variants={controlsVariants}>
                                    <MoviePreviewControls 
                                        genre={props.genre} 
                                        name={props.name} 
                                        id={props.id} 
                                        onLikeMovie={onLikeMovie} 
                                        onDislikeMovie={onDislikeMovie} 
                                    />
                                </motion.div>
                            </motion.div>
                        }
                    </AnimatePresence>
            </motion.div>
        </React.Fragment>
    )
} 
