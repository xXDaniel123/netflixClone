// import React from 'react'
// import { MoviePreviewControls } from './MoviePreviewControls'
// import { motion } from 'framer-motion'

// export const MoviePreviewPlaying = (props) => {

//     const variants = {
//         visible: { 
//             opacity: 1,
//             scale: 1,
//             // top: -50,
//             // left: -50
//         },
//         hidden: { 
//             scale: 0.675,
//             opacity: 0.7,
//             originX: 0,
//             originY: 0,
//             top: 0,
//             left: 0
//         },
//     }

//     return (
//         <motion.div 
//             initial="hidden"
//             animate="visible"
//             variants={variants}

//             className="trailer-container">
//             <img src={ props.imgURL } alt=""/>
//             <MoviePreviewControls genre={ props.genre } name={ props.name } />
//         </motion.div>
//     )
// }