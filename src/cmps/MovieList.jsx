import React, { useEffect, useState, useRef } from 'react'
import { videoService } from '../services/videoService'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from '../store/actions/videoActions'
import { MoviePreview } from './MoviePreview'
import { motion, AnimateSharedLayout } from 'framer-motion'
import styled from 'styled-components'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export function MovieList(props) {

    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.videoReducer)
    const [listClassNames, setListClassNames] = useState('movies-container')

    useEffect(() => {
        loadMovies()
    }, [])

    async function loadMovies(){
        try{
            const movies = await videoService.getMoviePreviews()
            dispatch({ type: 'SET_MOVIES', movies })
        }catch(err){
            console.log(err, 'error fetching movies')
        }
    }

    const swiperConfig = {
        spaceBetween: 3,
        slidesPerView: 6,
        slidesPerGroup: 6,
        speed: 650,
        navigation: true,
        loop:true,
        breakpoints: {
            1400: {
                slidesPerView: 6,
                slidesPerGroup: 6, 
            },
            1096: {
                slidesPerView: 5,
                slidesPerGroup: 5, 
            },
            800: {
                slidesPerView: 4,
                slidesPerGroup: 4, 
            },
            500: {
                slidesPerView: 3,
                slidesPerGroup: 3, 
            },
            1: {
                slidesPerView: 2,
                slidesPerGroup: 2, 
            }
        }
    }

    return (
        <section className="list-container" >
            <h2>{ props.name }</h2>
            <motion.div className={ listClassNames }
                onHoverStart={() => setListClassNames('movies-container hovering') }
                onHoverEnd={() => setListClassNames('movies-container') }
                >
                {movies.length &&
                    <Swiper className={"swiper-container"}
                        {...swiperConfig}
                        onSwiper={(swiper) => {
                            if (props.idx === 1) swiper.slideToLoop(7, 0, false)
                            if (props.idx === 2) swiper.slideToLoop(13, 0, false)
                        }}
                    >
                        {movies.map((movie, idx) => {
                            return (
                                <SwiperSlide key={movie._id}>
                                    <MoviePreview
                                        key={movie._id}
                                        id={movie._id}
                                        name={movie.name}
                                        imgURL={movie.imgURL}
                                        genre={movie.genre}  
                                        trailerURL={movie.trailerURL}
                                    />
                                </SwiperSlide>
                            )
                        })}  
                </Swiper>
                }
            </motion.div>      
        </section>
    )
}
