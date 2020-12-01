// import axios from "axios"
import httpService from "./httpService";

async function query(search) {
    return categoryList
}

const categoryList=[
    {
        id: 'c101',
        name: 'New Releases'
    },
    {
        id: 'c102',
        name: 'Action'
    },
    {
        id: 'c103',
        name: 'Drama'
    },
]

async function getMoviePreviews() {
    const movies = await httpService.get('movie')
    return movies
}

async function getMovieById(id){
    const movieToReturn = await httpService.get(`movie/${id}`)
    return movieToReturn
}

export const videoService = {
    query,
    categoryList,
    getMovieById,
    getMoviePreviews
}
