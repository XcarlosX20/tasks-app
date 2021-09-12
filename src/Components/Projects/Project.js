import React,{useContext} from 'react';
import ProjectContext from '../../Context/Projects/ProjectContext';
const Project = ({project}) => {
    const {getActualProject} = useContext(ProjectContext);
    const {projectName, id} = project;
    const handleProject = () => {
        getActualProject(id);
    }
    return ( 
        <li>
            <button
                onClick={handleProject}
                type="button"
                className="btn btn-blank">
                {projectName}
            </button>
        </li>
     );
}
 
export default Project;