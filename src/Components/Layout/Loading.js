import React, { useContext} from 'react';
import { useHistory } from 'react-router';
import authContext from '../../Context/Auth/AuthContext';
const Loading = () => {
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
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                        </div>) : null
            }
        </>
    );
}

export default Loading;