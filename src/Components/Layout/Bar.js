import React,{useContext} from 'react';
import {useHistory } from 'react-router-dom';
import authContext from '../../Context/Auth/AuthContext';
import ProjectContext from '../../Context/Projects/ProjectContext';
const Bar = () => {
    let history = useHistory()
    const {user, logout} = useContext(authContext);
    const {hideProjects} = useContext(ProjectContext);
   const btnLogout = async () => {
            logout();
            hideProjects();
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