import React from 'react';
import Sidebar from "../Layout/Sidebar";
import Bar from "../Layout/Bar";
import FormTask from '../Task/FormTask';
import List from '../Task/List';
const Projects = () => {
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