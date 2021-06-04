import {useContext} from 'react'; 
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';
const Project = ({project}) => {
    const projectContext = useContext(ProjectContext);
    const {selectProject} = projectContext;
    const taskContext = useContext(TaskContext);
    const {getTasks} = taskContext;
    const selectProjectFn = (id) => {
        selectProject(id);
        getTasks(id);
    }
    return ( 
        <li>
            <button onClick={() => {
                selectProjectFn(project.id);
            }}
            type="button" className="btn btn-blank">
                {project.projectName}
            </button>
        </li>
     );
}
 
export default Project;