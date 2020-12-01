import React from 'react'
import thumbsDown from '../assets/icons/thumbsUp.svg'
import thumbsUp from '../assets/icons/thumbsDown.svg'
import downArrow from '../assets/icons/downArrow.svg'


export const Controls = () => {

    return (
        <div className="icons-container">
            <div className="thumbs-container">
                <div className="icon-container"><img src={thumbsUp} alt="" /></div>
                <div className="icon-container"><img src={thumbsDown} alt="" /></div>
            </div>
            <div className="more-info-container"><h4>More info</h4><div className="icon-container arrow"><img src={downArrow} alt="" /> </div></div>
        </div>
    )
}