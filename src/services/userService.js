import httpService from "./httpService";
import storageService from "./storageService";

// CRUD

const userService = {
    login,
    signup,
    logOut,
    googleSignup
    // checkForLoggedInUser,
    // update,
    // getUserbyId
}

export default userService

async function login(userCredentials){
    const user = await httpService.post('auth/login', userCredentials)
    sessionStorage.setItem('USER', JSON.stringify(user))
    return _handleLogin(user)
}

async function signup(userCredentials){
    const user = await httpService.post('auth/signup', userCredentials)
    sessionStorage.setItem('USER', JSON.stringify(user))
    return _handleLogin(user)
}

async function logOut(){
    await httpService.post('auth/logout')
    localStorage.clear()
    sessionStorage.clear()
}

async function googleSignup(token) {
    const user = await httpService.post('google/signup', token)
    sessionStorage.setItem('USER', JSON.stringify(user))
    return _handleLogin(user)
}

// async function checkForLoggedInUser() {
//     console.log('yes');
    
//     const user = storageService.loadFromStorage('USER')
//     if (user) {
//         // keep user logged in with sending a request to server
//     }
// }

function _handleLogin(user){
    localStorage.setItem('USER', JSON.stringify(user))
    return user
}