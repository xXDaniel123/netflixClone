// import React, { useEffect, useState, useRef } from 'react'
// import { useParams } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { loadMovie } from '../store/actions/videoActions'
// import { motion, AnimatePresence } from 'framer-motion'
// import { MoviePreviewControls } from './MoviePreviewControls'


// export const _MovieDetails = (props) => {

//     const { id } = useParams()
//     const videoEl = useRef(null)

//     useEffect(() => {
//         loadMovieDetails()
//     }, [])

//     const loadMovieDetails = async () => {
//         try {
//             await props.loadMovie(id)
//         } catch (err) {
//             console.log('err in FE', err)
//         }
//     }

//     const togglePlayingVideo = () => {
//         if (videoEl.current.paused) videoEl.current.play()
//         else videoEl.current.pause()
//     }

//     return (
//         <AnimatePresence>
//             {props.currentMovie && (
//                 <motion.div
//                     className="details-inner-container" >
//                     <motion.div className="details-video-container" onClick={() => togglePlayingVideo()}>
//                         <motion.video autoPlay className="details-video" ref={videoEl} >
//                             <source src={props.currentMovie.trailerURL} />
//                         </motion.video>
//                         <motion.div className="grey-gradient"></motion.div>
//                         <motion.div className="grey-bg"></motion.div>
//                     </motion.div>
//                     {/* controls */}
//                     <motion.div className="details-text-container">
//                         <motion.h2>{props.currentMovie.name}</motion.h2>
//                         <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum incidunt odio ad obcaecati necessitatibus quam officia. Deserunt eos, ab accusamus sapiente repellendus itaque dicta corrupti voluptatem ipsa, facere accusantium!</motion.p>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         currentMovie: state.videoReducer.currentMovie
//     }
// }

// const mapDispatchToProps = {
//     loadMovie
// }

// export const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(_MovieDetails)