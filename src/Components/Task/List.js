import React,{useContext} from 'react';
import Task from "./Task";
import ProjectContext from '../../Context/Projects/ProjectContext';
const List = () => {
    const {actualProject, deleteProject } = useContext(ProjectContext);
    if(!actualProject) return <h2>Select or create a new project</h2>;
    const {projectName, id} = actualProject[0];
    const tasks = [
        {taskName: "hello", id: 3},
        {taskName: "bye", id: 4}
    ]
    return ( 
        <>
           <h2>{projectName}</h2>
            <ul className="list-task">
                {
                   tasks.length > 0 ? (
                    tasks.map(task=>(
                        <Task task={task} key={task.id}/>
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