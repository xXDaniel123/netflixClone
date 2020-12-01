import React, { useEffect, useState, useRef } from 'react'
import { videoService } from '../services/videoService'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from '../store/actions/videoActions'
import { MoviePreview } from './MoviePreview'
import { motion, AnimateSharedLayout } from 'framer-motion'


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Checkbox } from '@material-ui/core'

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export function MovieList(props) {

    const { movies } = useSelector(state => state.videoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        loadMovies()
    }, [])

    const [listClassNames, setListClassNames] = useState('movies-container')

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
    }

    return (
        <section className="list-container" >
            <h2>{ props.name }</h2>
            <motion.div className={ listClassNames }
                onHoverStart={() => setListClassNames('movies-container hovering') }
                onHoverEnd={() => setListClassNames('movies-container') }
                >
                {movies.length &&
                    <Swiper {...swiperConfig}
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
