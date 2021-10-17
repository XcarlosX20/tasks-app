import React,{useEffect, useContext} from 'react';
import {Route } from "react-router";
import authContext from '../../Context/Auth/AuthContext';
import Loading from '../Layout/Loading';
const PrivateRoute = ({component: Component, ...props}) => {
    const {auth, getUser} = useContext(authContext);
    useEffect(() => {
        getUser();
        // eslint-disable-next-line 
    }, [])
    return ( 
        <Route {...props} render={props => !auth ? 
            (<Loading/>) : (<Component {...props}/>)}/>
     );
}
 
export default PrivateRoute;