import React, { useEffect, useState }  from 'react';
import { NetflixApp } from './pages/NetflixApp'
import './assets/styles/global.scss'
import { Route, Switch, useLocation } from 'react-router-dom';
import { MovieDetails } from './cmps/MovieDetails';
import { AboutPage } from './pages/AboutPage';
import { Navbar } from './cmps/Navbar';
import { LoginPage } from './pages/LoginPage';
import { useSelector } from 'react-redux';
import { WelcomePage } from './pages/WelcomePage';
import { Drawer } from './cmps/Drawer';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()
  const currentMovie = useSelector(state => state.videoReducer.currentMovie)

  useEffect(() => {
    currentMovie ? document.querySelector('html').classList.add('disable-scroll') : document.querySelector('html').classList.remove('disable-scroll') 
  }, [currentMovie])

  return (
    <React.Fragment>
      {(location.pathname !== '/login' && location.pathname !== '/') && <Navbar />}
      {(location.pathname !== '/login' && location.pathname !== '/') && <Drawer />}
      <AnimatePresence>
        <Switch>
          <Route path="/about" component={AboutPage } />
          <Route path="/browse" component={ NetflixApp } />
          <Route path="/login" component={ LoginPage } />
          <Route path="/" component={ WelcomePage } />
        </Switch>
      </AnimatePresence>
        <Route path="/browse/:id" component={ MovieDetails } />
    </React.Fragment>
  )
}

export default App;