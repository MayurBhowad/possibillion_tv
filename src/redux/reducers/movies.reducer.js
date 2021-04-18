import { LOADING, GET_MOVIES } from '../types.redux';

const initialState = {
    movie: {},
    movies: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }

        default:
            return state;
    }
}