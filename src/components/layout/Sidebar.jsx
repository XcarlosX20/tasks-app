import React from 'react';
import ListProjects from '../projects/ListProjects';
import NewProject from '../projects/NewProject';
const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>task</span></h1>
            <NewProject/>
            <div className="proyectos">
                <h2>Your Projects</h2>
                <ListProjects/>
            </div>
        </aside>
     );
}
 
export default Sidebar;