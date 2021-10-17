import React,{useContext} from 'react';
import Task from "./Task";
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const List = () => {
    const {actualProject, deleteProject } = useContext(ProjectContext);
    const {taskProject} = useContext(TasksContext);
    if(!actualProject) return <h2>Select or create a new project</h2>;
    const {project_name, _id} = actualProject[0];
    return ( 
        <>
           <h2>{project_name}</h2>
            <ul className="list-task">
                {
                   taskProject.length ? 
                    <TransitionGroup>
                    {taskProject.map(task=>(
                        <CSSTransition
                        timeout={300}
                        classNames="task"
                        key={task._id}>
                            <Task task={task}/>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                   :
                   (<li className="task">
                       No pending tasks
                   </li>)
                }
            </ul>
            <button
            onClick={() => {deleteProject(_id);}}
            type="button"
            className="btn"
            >Delete Project &times;</button>
        </>
     );
}
 
export default List;