import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { onUserSignup, onUserLogin, onGoogleSignup } from '../store/actions/userActions';
import { useHistory, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo.svg'

const clientId = '168447752977-topi06sp3n60pk37e8j5dg91lnjophvi.apps.googleusercontent.com'

export const LoginPage = () => {
    
    const [isErrorShown, setIsErrorShown] = useState(false)
    const [toggleMode, setToggleMode] = useState('signup')
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    // toggle between login and sign up mode
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        setIsErrorShown(false)
        const currValue = target.value.replace(/\s(?=\s)/g, '')
        setUserDetails(prevDetails => ({ ...prevDetails, [target.name]: currValue }))
    }

    const onSignup = async (ev) => {
        ev.preventDefault()

        const newUser = {
            email: userDetails.email.trim(),
            fullName: userDetails.firstName.trim() + ' ' + userDetails.lastName.trim(),
            password: userDetails.password,
            moviePref: {
                likedMovies: [],
                dislikedMovies: [],
            }
        }

        if (!newUser.email || !userDetails.firstName.trim() || !userDetails.lastName.trim() || !newUser.password) {
            setIsErrorShown(true)
            return
        }

        try {
            await dispatch(onUserSignup(newUser))
            history.replace('/browse')
        } catch (err) {
            setIsErrorShown(true)
        }
    }

    const onLogin = async (ev) => {
        ev.preventDefault()
        setIsErrorShown(false)
        const userToLogin = {
            email: userDetails.email.trim(),
            password: userDetails.password.trim()
        }
        // need to show error message
        if (!userToLogin.email || !userToLogin.password) {
            setIsErrorShown(true)
            return
        }

        try {
            await dispatch(onUserLogin(userToLogin))
            history.replace('/browse')
        } catch (err) {
            setIsErrorShown(true)
        }
    }

    const onSuccess = async (res) => {
        try{
            await dispatch(onGoogleSignup(res))
            history.replace('/browse')
        } catch(err) {
            setIsErrorShown(true)
            console.log('error on front end')
        }
    }

    const onFailure = () => {
        setIsErrorShown(true)
    }

    const variants = {
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 24
        },
        initial: {
            opacity: 0,
            y: 24
        }
    }

    return (
        <div className="login-container">
            <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
            <div className="background-container">
                <div className="black-screen"></div>
                <img src="https://res.cloudinary.com/da0i9wy5t/image/upload/v1605007211/hero_image_lnjtd8.jpg" alt="" />
            </div>
            <motion.div className="form-outer-container"
                exit="exit"
                animate="animate"
                initial="initial"
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                <div className="form-container">
                { toggleMode === 'signup' && 
                <React.Fragment>
                        <Formik
                            validate={values => {
                                const errors = {};
                                if (!values.email) { errors.email = 'Required'; }
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { errors.email = 'Invalid email address'; } return errors;
                            }} onSubmit={ onSignup }>
                            {({ isSubmitting, }) => (
                                <form className="inner-form-container" onSubmit={ onSignup }>
                                    <h1>Sign Up</h1>
                                    <input className="field" type="text" name="firstName" onChange={handleChange} placeholder="First Name" autoComplete="off" />
                                    <input className="field" type="text" name="lastName" onChange={ handleChange } placeholder="Last Name" autoComplete="off" />
                                    <input className="field" type="email" name="email" onChange={ handleChange } placeholder="Email address" autoComplete="off" />
                                    <input className="field" type="password" name="password" onChange={ handleChange } placeholder="Password" autoComplete="off" />
                                    <button type="submit" disabled={ isSubmitting }>Sign Up</button>
                                </form>
                            )}
                        </Formik>
                    </React.Fragment>
                }
                { toggleMode === 'login' && 
                    <React.Fragment>
                        <Formik
                            validate={values => {
                                const errors = {};
                                if (!values.email) { errors.email = 'Required'; }
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { errors.email = 'Invalid email address'; } return errors;
                            }} onSubmit={ onLogin }>
                            {({ isSubmitting, }) => (
                                <form className="inner-form-container" onSubmit={ onLogin }>
                                    <h1>Log In</h1>
                                    <input className="field" type="email" name="email" onChange={ handleChange } placeholder="Email address" autoComplete="off" />
                                    <input className="field" type="password" name="password" onChange={ handleChange } placeholder="Password" autoComplete="off" />
                                    <button type="submit" disabled={ isSubmitting }>Log in</button>
                                </form>
                            )}
                        </Formik>
                    </React.Fragment>
                }
                    <div><br/><h4>or</h4><br/></div>
                    <div className="google-login-btn">
                        <GoogleLogin 
                            clientId={clientId}
                            buttonText={toggleMode === 'signup' ? "Sign up with Google" : "Log in with google"}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={false} 
                        />
                    </div>
                    { isErrorShown && <div className="error-container">
                            Something went wrong... <br/>
                            Check the details and try again?
                        </div>
                    }
                    <div className="toggle-signup-mode">
                    { (toggleMode === 'signup') ? 
                            <div>Already user?<br/><button onClick={() => setToggleMode('login')}>Login</button></div>
                            : <div><button onClick={() => setToggleMode('signup')}>Sign up</button></div>
                    }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
