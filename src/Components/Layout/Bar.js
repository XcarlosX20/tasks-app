import React,{useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import authContext from '../../Context/Auth/AuthContext';
import Loading from './Loading';
const Bar = () => {
    let history = useHistory()
    const {user, logout} = useContext(authContext);
   const btnLogout = async () => {
            logout();
            history.push("/login");
   }
    
    return ( 
        <header className="app-header">
            <p style={{margin: "10px"}} className="name-user">Hi, <span>{user ? user.name : null}</span></p>
            <nav className="nav-main">
            <button className="btn btn-primary" style={{margin: "0px", textDecoration: "underline", textUnderlineOffset: "3px"}} onClick={btnLogout}
            >Log out</button>:
            </nav>
        </header>
     );
}
 
export default Bar;