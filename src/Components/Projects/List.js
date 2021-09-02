import React from 'react';
import Project from './Project';
const List = () => {
    const projects = [
        {projectName: "MERN",
        id: 2},
        {projectName: "JAM",
        id: 3},
        {projectName: "LAMP",
        id: 4}
    ];
    return ( 
        <ul className="list-projects">
            {projects.map(project=>(<Project project={project} key={project.id}/>))}
        </ul>
     );
}
 
export default List;