import { FETCH_CAKE, CAKE_LOADING, CAKE_LOADED, GET_CAKE, FETCH_ROLE, ROLE_LOADING, ROLE_LOADED, GET_ROLE, FETCH_COOKIE, COOKIE_LOADING, COOKIE_LOADED, GET_COOKIE } from '../actions/types';

const initialState = {
    cakes:[],
    cakeLoading: false,
    cake:[],
    roles:[],
    roleLoading: false,
    role:[],
    cookies:[],
    cookieLoading: false,
    cookie:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case CAKE_LOADING:
        return{
            ...state,
            cakeLoading:true
            }
        case CAKE_LOADED:
        return{
            ...state,
            cakeLoading:false
            }
        case FETCH_CAKE:
        return {
            ...state,
            cakes:action.payload
        };
        case GET_CAKE:
        return {
            ...state,
            cake:action.payload
        };
        case ROLE_LOADING:
            return{
                ...state,
                roleLoading:true
                }
            case ROLE_LOADED:
            return{
                ...state,
                roleLoading:false
                }
            case FETCH_ROLE:
            return {
                ...state,
                roles:action.payload
            };
            case GET_ROLE:
            return {
                ...state,
                role:action.payload
            };
            case COOKIE_LOADING:
            return{
                ...state,
                cookieLoading:true
                }
            case COOKIE_LOADED:
            return{
                ...state,
                cookieLoading:false
                }
            case FETCH_COOKIE:
            return {
                ...state,
                cookies:action.payload
            };
            case GET_COOKIE:
            return {
                ...state,
                cookie:action.payload
            };
        default:
        return state;
    };
}