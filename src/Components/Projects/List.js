import React,{useEffect, useContext} from 'react';
import Project from './Project';
import ProjectContext from '../../Context/Projects/ProjectContext';
const List = () => {
    const { projects, getProjects } = useContext(ProjectContext)
    useEffect(() => {
       getProjects();
       //eslint-disable-next-line
    }, []);
    return ( 
        <ul className="list-projects">
            {projects.length > 0 ? (
                projects.map(project=>(<Project project={project} key={project._id}/>))
            ): <li>You no have pending projects</li>}
        </ul>
     );
}
 
export default List;