import userService from "../../services/userService";

export function onUserSignup(userCredentials) {
    return async dispatch => {
        try {
            const newUser = await userService.signup(userCredentials)
            dispatch({ type: 'SET_USER', loggedInUser: newUser })
        } catch (err) {
            console.log(err, 'error signing up')
            throw err
        }
    }
}

export function onUserLogout(){
    return async dispatch => {
        try {
            await userService.logOut()
            dispatch({ type: 'SET_USER', loggedInUser: null })
        } catch (err) {
            console.log('cannot logout', err)
            throw err
        }
    }
}

export function onUserLogin(userCredentials){
    return async dispatch => {
        try {
            const user = await userService.login(userCredentials)
            dispatch({ type: 'SET_USER', loggedInUser: user })
        } catch (err){
            console.log('cannot login', err)
            throw err
        }
    }
}

export function onGoogleSignup(token){
    return async dispatch => {
        try{
            // code here to send to service the token
            // that will send the token to server
            // server will authenticate the details
            // await userService.googleSignup(token)
            const user = await userService.googleSignup(token)
            dispatch({ type: 'SET_USER', loggedInUser: user })
        } catch (err) {
            console.log('error on google signup', err)
            throw err
        }
    }
}

export function updateUser(user){
    return async dispatch => {
        try {

            // first send dispatch to set the user so it'll show in the front
            // then send the put request to update the user
            
            dispatch({ type: 'SET_USER', loggedInUser: user })

        } catch (err) {
            console.log('error saving user', err)
            throw err
        }
    }
}

// export function checkLoggedInUser(){
//     return async dispatch => {
//         try {
//             await userService.checkForLoggedInUser()
//             // if(user) dispatch({ type: 'SET_USER', loggedInUser: user })
//         } catch (err) {
//             console.log('no user in local storage');
//         }
//     }
// }