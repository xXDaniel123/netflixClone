import { videoService } from '../../services/videoService'

export function loadCategories() {
  return async dispatch => {
    try {
      const categories = await videoService.query();
      dispatch({ type: 'SET_CATEGORIES', categories });
      loadMovies()
    } catch (err) {
      console.log('error loading categories', err);
      throw err
    }
  }
}

export function loadMovies() {
  return async dispatch => {
    try {
      const movies = await videoService.moviePreviews();
      dispatch({ type: 'SET_MOVIES', movies });
    } catch (err) {
      console.log('error loading movies', err);
      throw err;
    }
  }
}

export function loadMovie(id){
  return async dispatch => {
    try{
      const currentMovie = await videoService.getMovieById(id)
      dispatch({ type: 'SET_MOVIE', currentMovie })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export function resetMovie(){
  return async dispatch => {
    try {
      dispatch({ type: 'RESET_MOVIE' })
    } catch(err){
      console.log(err)
      throw err
    }
  }
}

// export function disableJumbotronVideo() {
//   return dispatch => {
//     dispatch({ type: 'DISABLE_JUMBOTRON_VIDEO' })
//   }
// }
// export function enableJumbotronVideo() {
//   return dispatch => {
//     dispatch({ type: 'ENABLE_JUMBOTRON_VIDEO' })
//   }
// }