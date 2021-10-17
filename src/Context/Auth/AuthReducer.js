import {GET_USER,LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_ERROR, REGISTER_ERROR,LOGOUT} from "../../Types";
export const AuthReducer = (state, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return{
                ...state, auth: true, alertAuth: null
            }
        case GET_USER: 
            return{
                ...state, user: action.payload.user, auth: true
            }
        case LOGOUT:
        case LOGIN_ERROR: 
        case REGISTER_ERROR: 
            localStorage.removeItem('token');
            return{
                alertAuth: action.payload, user: null, auth:null, token: null
            }

     default:
          return state
    }
 }