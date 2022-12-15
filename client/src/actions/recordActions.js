import { ADD_RECORD } from './types';
import axios from 'axios';

export const addrecord = (record) => dispatch =>{
    dispatch({ type:ADD_RECORD })
    axios({
        method:'post',
        url:'/api/addrecord',
        data: record
    }).then(res => {
        console.log(res.data)
    })

    //   .then(cakes => {
    //         dispatch({ type:CAKE_LOADED })
    //         dispatch({
    //             type:FETCH_CAKE,
    //             payload:cakes.data
    //         })
    //   })
      
};

