import { useReducer } from "react";
import {clientAxios, tokenAuth} from "../../Axios";
import {GET_USER, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_ERROR, REGISTER_ERROR, LOGOUT} from "../../Types";
import authContext from "./AuthContext";
import {AuthReducer} from "./AuthReducer";
const AuthState = ({children}) =>{
    const initialState = {
        auth: null,
        token: localStorage.getItem('token'),
        user: null,
        alertAuth: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    //fx
    const registerUser = async(name,email,password) => {
        try {
            console.log(name, email, password);
            const response = await clientAxios.post('/api/users', {name,email,password});
            const token = response.data.token;
            dispatch({type: REGISTER_SUCCESS, payload: token})
            getUser(token);
            
        } catch (error) {
           const alert = {
            msg: error.response.data.msg,
            category: "alert-error"
           }
            dispatch({type: REGISTER_ERROR, payload: alert});
        }
    }
    const getUser = async (token) => {
        if(token){
            tokenAuth(token);
        }
        try {
            const response = await clientAxios.get("/api/auth");
            dispatch({
                type:GET_USER, payload: response.data
            })
                
        } catch (error) {
            const alert = {
                msg: "there was an error",
                category: "alert-error"
               }
            dispatch({type: LOGIN_ERROR, payload: alert});
        }

    }
    const login = async (email, password) => {
        try {
            const response = await clientAxios.post('/api/auth',{email, password});
            const token = response.data.token;
            dispatch({type: LOGIN_SUCCESS, payload: token});
            getUser(token);
        } catch (error) {
            const alert = {
                msg: error.response.data.msg || "there was an error",
                category: "alert-error"
               }
            dispatch({type: LOGIN_ERROR, payload: alert});
        }
    }
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }
return(
    <authContext.Provider
    value={{
        auth: state.auth,
        token: state.token,
        user: state.user,
        alertAuth: state.alertAuth,
        registerUser,
        login,
        getUser,
        logout
    }}>
        {children}
    </authContext.Provider>
)
}
export default AuthState;