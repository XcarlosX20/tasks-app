import React,{useContext} from 'react';
import Task from "./Task";
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
const List = () => {
    const {actualProject, deleteProject } = useContext(ProjectContext);
    const {taskProject} = useContext(TasksContext);
    if(!actualProject) return <h2>Select or create a new project</h2>;
    const {projectName, id} = actualProject[0];
    return ( 
        <>
           <h2>{projectName}</h2>
            <ul className="list-task">
                {
                   taskProject.length > 0 ? (
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
            onClick={() => {deleteProject(id);}}
            type="button"
            className="btn"
            >Delete Project &times;</button>
        </>
     );
}
 
export default List;