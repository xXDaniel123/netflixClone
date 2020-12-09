import React from 'react'
import { Controls } from './Controls'

export const MoviePreviewControls = (props) => {

    const getGenres = () => {
        const genres = props.genre.map((currGenre, idx) => {
            if (idx === props.genre.length - 1) {
                return <p key={idx}>{currGenre}</p>
            } else return (
                <p key={idx}>{currGenre}<span className="middle-dot">·</span></p>
            )
        })
        return genres
    }

    return (
        <div className="controls-container">
            <div><h6>{props.name}</h6></div>
            <div className="inner-controls-container">
                <Controls 
                    id={props.id}
                    onLikeMovie={props.onLikeMovie}
                    onDislikeMovie={props.onDislikeMovie}
                />
            </div>
            <div className="genres-container">{ getGenres() }</div>
        </div>
    )
}

