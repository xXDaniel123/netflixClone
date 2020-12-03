import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { loadMovie, resetMovie } from '../store/actions/videoActions'
import { motion, AnimatePresence } from 'framer-motion'
import { MoviePreviewControls } from './MoviePreviewControls'
import { Navbar } from './Navbar'
import exit from '../assets/icons/exit.svg'

export const _MovieDetails = (props) => {

    const { id } = useParams()
    const videoEl = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        loadMovieDetails()
        dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: false })
        return () => {
            dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: true })
        }
    }, [])

    const loadMovieDetails = async () => {
        try {
            await props.loadMovie(id)
        } catch (err) {
            console.log('err in FE', err)
        }
    }

    const togglePlayingVideo = () => {
        if (videoEl.current.paused) videoEl.current.play()
        else videoEl.current.pause()
    }

    const getGenres = () => {
        const genres = props.currentMovie.genre.map((currGenre, idx) => {
            if (idx === props.currentMovie.genre.length - 1) {
                return <p key={idx}>{currGenre}</p>
            } else return (
                <p key={idx}>{currGenre}<span className="middle-dot">·</span></p>
            )
        })
        return genres
    }

    const closeMovieModal = (ev) => {
        ev.stopPropagation()
        dispatch(resetMovie())
        history.push('/browse')
    }

    const easing = [0.6, 0.05, 0.01, 1]

    const variants = {
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.55,
                ease: easing
            }
        },
        initial: {
            scale: 0.75,
            opacity: 0,
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: easing
            }
        }
    }

    return (
        <React.Fragment>
            {props.currentMovie && (
                <motion.div
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    variants={variants}
                    className="details-inner-container" >
                    <motion.div className="details-video-container" onClick={() => togglePlayingVideo()}>
                        <div className="details-exit-btn" onClick={ closeMovieModal }><img src={exit} alt="exit"/></div>
                        <motion.video autoPlay className="details-video" ref={videoEl} >
                            <source src={props.currentMovie.trailerURL} />
                        </motion.video>
                        <motion.div className="grey-gradient"></motion.div>
                        <motion.div className="grey-bg"></motion.div>
                    </motion.div>
                    {/* controls */}
                    <motion.div className="details-text-container">
                        <motion.h2>{props.currentMovie.name}</motion.h2>
                        <div className="genres-container" style={{ fontSize: '1rem', marginBottom: '1rem' }}>{getGenres()}</div>
                        <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum incidunt odio ad obcaecati necessitatibus quam officia. Deserunt eos, ab accusamus sapiente repellendus itaque dicta corrupti voluptatem ipsa, facere accusantium!</motion.p>
                    </motion.div>
                </motion.div>
            )}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        currentMovie: state.videoReducer.currentMovie,
        isJumboTronCanPlay: state.videoReducer.isJumboTronCanPlay
    }
}

const mapDispatchToProps = {
    loadMovie
}

export const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(_MovieDetails)