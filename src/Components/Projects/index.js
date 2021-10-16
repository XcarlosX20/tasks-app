import React, { useContext,useEffect } from 'react';
import Sidebar from "../Layout/Sidebar";
import Bar from "../Layout/Bar";
import FormTask from '../Task/FormTask';
import List from '../Task/List';
import authContext from '../../Context/Auth/AuthContext';
const Projects = () => {
    const {getUser} = useContext(authContext);
    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, [])
    return ( 
        <>
            <div className="container-app">
                <Sidebar/>
                <div className="section-main">
                    <Bar/>
                    <main>
                        <FormTask/>
                        <div className="container-task">
                             <List/>
                        </div>
                    </main>
                </div>
            </div>

        </>
     );
}
 
export default Projects;