import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import speaker from '../assets/icons/speaker.svg'
import off from '../assets/icons/off.svg'
import on from '../assets/icons/on.svg'

export function Jumbotron() {

    const [logoClass, setLogoClass] = useState('jumbotron-logo')
    const [isMuted, setIsMuted] = useState(true)
    const isJumboTronCanPlay = useSelector(state => state.videoReducer.isJumboTronCanPlay)
    const dispatch = useDispatch()
    const mainVideoEl = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', scrollToStopJumbotron)
        const addClassTimeout = setTimeout(() => {
            setLogoClass( 'jumbotron-logo resized-logo' )
        }, 4000)
        return () => {
            clearTimeout(addClassTimeout)
            window.removeEventListener('scroll', scrollToStopJumbotron)
        }
    }, [])

    useEffect(() => {
        if (!isJumboTronCanPlay) mainVideoEl.current.pause()
    }, [isJumboTronCanPlay])

    const scrollToStopJumbotron = () => {
        if (window.pageYOffset > 400) {
            dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: false })
            mainVideoEl.current.pause()
        }
    }

    const toggleJumbotronVideo = () => {
        if (mainVideoEl.current.paused) {
            dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: true })
            mainVideoEl.current.play()
        }
        else {
            dispatch({ type: 'TOGGLE_JUMBOTRON_VIDEO', isJumboTronCanPlay: false })
            mainVideoEl.current.pause()}
    }

    const toggleMute = (ev) => {
        ev.stopPropagation()
        setIsMuted(!isMuted)
        mainVideoEl.current.muted = !mainVideoEl.current.muted
    }
    
    return (
        <section className="jumbotron-container" onClick={() => toggleJumbotronVideo()}>
            <div className="mute-btn-container" onClick={ (ev) => toggleMute(ev) }>
                <img src={speaker} alt="toggle-mute"/>
                <img src={isMuted ? off : on} alt=""/>
            </div>
            <div className="video-container">
                <div className={logoClass} >
                    <img src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1604490766/AAAABcxoPeN-DpwsPN_8-2FgylY9Qcke_I3SPAc8AtGzb-XiQxoWFGRocQ_LsTY7210f-xKKMr0DKMurSA5L84AHRrY2PSEEKDIm92fglsbdsFLd5INW09Mu0vCr05WOoDPDkchhwzDvUnBlPLzGFrGo31x-50dgKRWWdP8zZfl3KO4BEGgJRpd6nGbG7d3d0iA6UQRr0IUwWXA_xq6uso.png" alt=""/>
                </div>
                <video autoPlay muted ref={mainVideoEl} > 
                    <source src="https://res.cloudinary.com/da0i9wy5t/video/upload/v1603972997/David_Attenborough__A_Life_on_Our_Planet___Official_Trailer___Netflix_gw0wrf.mp4" type="video/mp4" />
                </video>
                <div className="jumbotron-grey-gradient"></div>
                <div className="jumbotron-grey-bg"></div>
            </div>
        </section>
    )
}