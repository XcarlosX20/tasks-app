import React from 'react';
import List from '../Projects/List';
import NewProject from "../Projects/NewProject";
const Sidebar = () => {
    return ( 
        <>
            <aside>
                <h1>MERN<span>tasks</span></h1>
                <NewProject/>
                <div className="projects m-2">
                    <h2>Your Projects</h2>
                    <List/>
                </div>
            </aside>
        </>
     );
}
 
export default Sidebar;