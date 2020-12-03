import React, { useEffect, useState } from 'react'
import { Jumbotron } from '../cmps/Jumbotron'
import { useSelector, useDispatch } from 'react-redux'
import { resetMovie } from '../store/actions/videoActions'
import { videoService } from '../services/videoService'
import { MovieList } from '../cmps/MovieList'
import { Route, useHistory } from 'react-router-dom'
import { Footer } from '../cmps/Footer'
import { motion } from 'framer-motion'

export function NetflixApp() {

    const { categories, currentMovie } = useSelector(state => state.videoReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        loadCategories()
    }, [])

    async function loadCategories(){
        try{
            const currCategories = await videoService.query()
            dispatch({ type: 'SET_CATEGORIES', categories:  currCategories })
        }catch(err){
            console.log(err, 'error fetching categories')
        }
    }

    const closeMovieModal = () => {
        dispatch(resetMovie())
        history.push('/browse')
    }

    const variants = {
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
        },
        initial: {
            opacity: 0,
            y: 30
        }
    }

    const pageTransition = {
        duration: 0.45,
        ease: 'easeOut',
        delay: 0.25

    }

    return (
        <motion.div className="app-container"
            exit="exit"
            animate="animate"
            initial="initial"
            variants={variants}
            transition={pageTransition}
            
        >
            {categories.length 
                ? <React.Fragment>
                    {currentMovie && <div className="screen" onClick={ () => closeMovieModal() }></div>}
                    <Jumbotron />
                    <motion.section className="categories"
                        exit="exit"
                        animate="animate"
                        initial="initial"
                        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                    >
                        {categories.map((category, idx) => {
                            return (
                                <MovieList idx={idx} key={category.id} name={category.name} />
                            )
                        })}
                    </motion.section>
                    <Footer />
                </React.Fragment>
                : <h4>loading...</h4> 
            }
        </motion.div>
    )
}
