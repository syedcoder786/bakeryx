import { FETCH_CAKE, CAKE_LOADING, CAKE_LOADED, GET_CAKE, ROLE_LOADING, ROLE_LOADED, FETCH_ROLE, GET_ROLE, FETCH_COOKIE, COOKIE_LOADING, COOKIE_LOADED, GET_COOKIE, } from './types';
import axios from 'axios';

export const fetchCake = () => dispatch => {
    dispatch({ type:CAKE_LOADING })
    axios.get('/api/fetchCake')
    // .then(res => res.json()) 
      .then(cakes => {
            dispatch({ type:CAKE_LOADED })
            dispatch({
                type:FETCH_CAKE,
                payload:cakes.data
            })
      })
      
};


export const findCake = (id) => (dispatch) => {

    axios.post('/api/findCake',id)
      .then(cake =>{
        console.log(cake.data)
              dispatch({
                type: GET_CAKE,
                payload: cake.data
              })
      })
            // .catch(error =>{
            //   dispatch({
            //     type: ERROR_CATEGORY,
            //     payload: error.response.data
            //   })
            // })
            // console.log(post.data)
  };

  
export const fetchRole = () => dispatch => {
  dispatch({ type:ROLE_LOADING })
  axios.get('/api/fetchRole')
  // .then(res => res.json()) 
    .then(roles => {
          dispatch({ type:ROLE_LOADED })
          dispatch({
              type:FETCH_ROLE,
              payload:roles.data
          })
    })
    
};


export const findRole = (id) => (dispatch) => {

  axios.post('/api/findRole',id)
    .then(role =>{
      console.log(role.data)
            dispatch({
              type: GET_ROLE,
              payload: role.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};

export const fetchCookie = () => dispatch => {
  dispatch({ type:COOKIE_LOADING })
  axios.get('/api/fetchCookie')
  // .then(res => res.json()) 
    .then(cookies => {
          dispatch({ type:COOKIE_LOADED })
          dispatch({
              type:FETCH_COOKIE,
              payload:cookies.data
          })
    })
    
};


export const findCookie = (id) => (dispatch) => {

  axios.post('/api/findCookie',id)
    .then(cookie =>{
      console.log(cookie.data)
            dispatch({
              type: GET_COOKIE,
              payload: cookie.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};



