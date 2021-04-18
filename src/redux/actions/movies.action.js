import axios from "axios";
import { GET_MOVIES, LOADING } from "../types.redux"

const API_KEY = require('../../config/keys').API_KEY;

const main_url = 'https://api.themoviedb.org/3/'


export const searchMoviesByString = searchString => dispatch => {
    dispatch({ type: LOADING });
    let page_no = 1;
    axios.get(`${main_url}search/movie?api_key=${API_KEY}&query=${searchString}&page=${page_no}`)
        .then(movies => {
            dispatch({
                type: GET_MOVIES,
                payload: movies.data.results
            })
        })
}