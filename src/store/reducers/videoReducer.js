const initialState = {
    categories: [],
    movies: [],
    currentMovie: null,
    isJumboTronCanPlay: true
}

export function videoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }

        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.movies
            }

        case 'SET_MOVIE':
            return {
                ...state,
                currentMovie: action.currentMovie
            }

        case 'RESET_MOVIE':
            return {
                ...state,
                currentMovie: null
            }

            // fix this one with extra for true 
        case 'TOGGLE_JUMBOTRON_VIDEO':
            return {
                ...state,
                isJumboTronCanPlay: action.isJumboTronCanPlay
            }

            default:
                return state
    }
}