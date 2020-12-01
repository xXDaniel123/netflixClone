// let getLoggedinUser = (sessionStorage.USER) ? JSON.stringify(sessionStorage.USER) : null

const initialState = {
    loggedInUser: (sessionStorage.USER) ? JSON.parse(sessionStorage.USER) : null,
}

export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: action.loggedInUser
            }

            default:
                return state
    }
}