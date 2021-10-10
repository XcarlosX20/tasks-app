import React, { useContext} from 'react';
import { useHistory } from 'react-router';
import alertContext from '../../Context/Alerts/AlertContext';
import authContext from '../../Context/Auth/AuthContext';
const Loading = (props) => {
    let history = useHistory();
   
    const {auth} = useContext(authContext)
    const token = localStorage.getItem('token');
    if(!token){
        history.push("/login");
    }
    return (
        <>  
            {
                !auth ? (<div className="container-app">
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                        </div>) : null
            }
        </>
    );
}

export default Loading;