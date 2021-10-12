import React,{useContext} from 'react';
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
const Project = ({project}) => {
    const {getActualProject} = useContext(ProjectContext);
    const {TaskinProject} = useContext(TasksContext);
    const {project_name, _id} = project;
    const handleProject = () => {
        getActualProject(_id);
        TaskinProject(_id);
    }
    return ( 
        <li>
            <button
                onClick={handleProject}
                type="button"
                className="btn btn-blank">
                {project_name}
            </button>
        </li>
     );
}
 
export default Project;