import axios from 'axios';

export const ADD_JOKE_START = 'ADD_JOKE_START';
export const ADD_JOKE_SUCCESS = 'ADD_JOKE_SUCCESS';
export const ADD_JOKE_FAILURE = 'ADD_JOKE_FAILURE';


export const addJoke = joke => dispatch => {
    console.log('logging jokes', joke);
    dispatch({type: ADD_JOKE_START})
    return axios
        .post('https://dadjokes-backend.herokuapp.com/api/jokes/public')
        .then(res => {
            console.log('this is add joke log', res.data)
            localStorage.setItem('token', res.data.token)
            dispatch({type: ADD_JOKE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ADD_JOKE_FAILURE, payload: err})
        })
}