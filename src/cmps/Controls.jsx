import React from 'react'
import thumbsDown from '../assets/icons/thumbsUp.svg'
import thumbsUp from '../assets/icons/thumbsDown.svg'
import downArrow from '../assets/icons/downArrow.svg'

export const Controls = (props) => {

    // need to check if the id of the movie already exists
    // thought: i can pass a prop from the list of movies, and if it is liked / disliked itll be passed down
    // so it speeds up the process of adding/removieng classes before hand

    return (
        <div className="icons-container">
            <div className="thumbs-container">
                <div className="icon-container" onClick={ (ev) => props.onLikeMovie(ev, props.id) }><img src={thumbsUp} alt="" /></div>
                <div className="icon-container" onClick={ (ev) => props.onDislikeMovie(ev, props.id) }><img src={thumbsDown} alt="" /></div>
            </div>
            <div className="more-info-container"><h4>More info</h4><div className="icon-container arrow"><img src={downArrow} alt="" /> </div></div>
        </div>
    )
}



