import React,{useContext} from 'react';
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
const Project = ({project}) => {
    const {getActualProject} = useContext(ProjectContext);
    const {TaskinProject} = useContext(TasksContext);
    const {projectName, id} = project;
    const handleProject = () => {
        getActualProject(id);
        TaskinProject(id)
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