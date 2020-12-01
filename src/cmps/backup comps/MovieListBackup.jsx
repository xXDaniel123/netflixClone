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
    const [maxSlides, setmaxSlides] = useState(6)
    const dispatch = useDispatch()
    // const swiperRef = useRef(null)

    useEffect(() => {
        loadMovies()
        window.addEventListener('resize', getScreenWidth)
        return () => {
            window.removeEventListener('resize', getScreenWidth)
        }
    }, [])

    const getScreenWidth = () => {

        console.log(window.innerWidth)
        if (window.innerWidth < 1000) {
            console.log('UPDATED TO 3')
            setmaxSlides(3)
        }
        if (window.innerWidth > 1000) {
            console.log('UPDATED TO 6')
            setmaxSlides(6)
        }


    }

    const [listClassNames, setListClassNames] = useState('movies-container')

    async function loadMovies() {
        try {
            const currMovies = await videoService.getMoviePreviews()
            dispatch({ type: 'SET_MOVIES', movies: currMovies })
        } catch (err) {
            console.log(err, 'error fetching movies')
        }
    }

    const swiperConfig = {
        spaceBetween: 3,
        slidesPerView: maxSlides,
        slidesPerGroup: maxSlides,
        speed: 650,
        navigation: true,
        loop: true,

        preloadImages: false,
        updateOnImagesReady: true,
        lazy: true,
        // pagination: true
    }

    // const [isLooping, setIsLooping] = useState(false)

    return (
        <section className="list-container">
            <h2>{props.name}</h2>
            <motion.div className={listClassNames}
                onHoverStart={() => setListClassNames('movies-container hovering')}
                onHoverEnd={() => setListClassNames('movies-container')}
            >
                {movies.length &&
                    <Swiper {...swiperConfig}>
                        {movies.map((movie, idx) => {
                            return (
                                <SwiperSlide key={movie.id}
                                >
                                    <MoviePreview
                                        key={movie.id}
                                        id={movie.id}
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




// ---------------------------



// import React, { useEffect, useState } from 'react'
// import { videoService } from '../services/videoService'
// import { useDispatch, useSelector } from 'react-redux'
// import { loadMovies } from '../store/actions/videoActions'
// import { MoviePreview } from './MoviePreview'
// import { AnimateSharedLayout } from 'framer-motion'

// export function MovieList(props) {

//     const { movies } = useSelector(state => state.videoReducer)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         loadMovies()
//     }, [])

//     async function loadMovies(){
//         try{
//             const currMovies = videoService.moviePreviews
//             dispatch({ type: 'SET_MOVIES', movies: currMovies })
//         }catch(err){
//             console.log(err, 'error fetching movies')
//         }
//     }

//     return (
//         <section className="list-container">
//             <h2>{ props.name }</h2>
//                 <div className="movies-container">
//                     {movies.length && movies.map(movie => {
//                         return (
//                             <MoviePreview
//                                 key={movie.id}
//                                 id={movie.id}
//                                 name={movie.name}
//                                 imgURL={movie.imgURL}
//                                 genre={movie.genre}  
//                                 trailerURL={movie.trailerURL}
//                             />
//                         )
//                     })}    
//                 </div>      
//         </section>
//     )
// }
