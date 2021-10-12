import React,{useContext} from 'react';
import Task from "./Task";
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
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
                   taskProject ? (
                    taskProject.map(task=>(
                        <Task task={task} key={task.task_id}/>
                    ))
                   ):
                   (<p className="task">
                       No pending tasks
                   </p>)
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