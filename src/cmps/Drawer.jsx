import React from 'react'
import { useState } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { NavbarMobile } from './NavbarMobile'
import { useSelector, useDispatch } from 'react-redux'
import rightArrow from '../assets/icons/rightArrow.svg'
import { onUserLogout } from '../store/actions/userActions'

export const Drawer = () => {

    const [isDrawerShown, setIsDrawerShown] = useState(false)
    const { loggedInUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    const toggleDrawer = () => {
        setIsDrawerShown(!isDrawerShown)
    }

    const onLogout = () => {
        if (loggedInUser) {
            try {
                dispatch(onUserLogout())
                history.replace('/login')
            } catch (err) {
                console.log('there was error loging out', err)
            }
        }
    }

    return (
        <React.Fragment>
            <NavbarMobile toggleDrawer={toggleDrawer} isDrawerShown={isDrawerShown} />
            <div className="nav-drawer" style={{ transform: isDrawerShown ? 'translateX(0%)' : 'translateX(-100%)', visibility: isDrawerShown ? 'visible' : 'hidden' }}>
                <div className="drawer-links-container">
                    {!loggedInUser
                    ?   <Link to="/login" className="login-drawer-link" onClick={() => setIsDrawerShown(false)}>
                            Login & Signup 
                            <img src={rightArrow} alt=""/>
                        </Link>
                    :   <div className="navbar-avatar-container">
                            <img src={loggedInUser.imgUrl} alt="" />
                            <h4>{loggedInUser.fullName}</h4>
                            <button onClick={onLogout}>Log out</button>
                        </div>

                    }
                    <div className="drwer-divider"></div>
                    <NavLink to="/browse" activeClassName="active-link" onClick={() => setIsDrawerShown(false) }>Home</NavLink>
                    <NavLink to="/about" activeClassName="active-link" onClick={() => setIsDrawerShown(false)}>About</NavLink>
                    <NavLink exact to="/" activeClassName="active-link" onClick={() => setIsDrawerShown(false)}>Welcome</NavLink>
                </div>
            </div>
            <div className="mobile-black-screen" onClick={() => setIsDrawerShown(false) } style={{ visibility: isDrawerShown ? 'visible' : 'hidden', opacity: isDrawerShown ? '1' : '0' }}></div>
        </React.Fragment>
    )
}
