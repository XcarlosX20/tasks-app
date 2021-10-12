import React,{useContext} from 'react';
import TasksContext from '../../Context/Tasks/TasksContext';
import ProjectContext from '../../Context/Projects/ProjectContext';
const Task = ({ task }) => {
    const {actualProject} = useContext(ProjectContext);
    const {deleteTask, TaskinProject, setStateTask, selectEdit} = useContext(TasksContext);
    const setState = () => {
        if(task.state){
            task.state = false;
        }else{
            task.state = true;
        }
        setStateTask(task);
    } 
    return (
        <li className="task shadow">
            <p>{task.task_name}</p>
            <div className="state">
                {task.state ?
                    (<button
                        onClick={setState}
                        type="button"
                        className="complete">
                        Done!
                    </button>)
                    :
                    (<button
                        onClick={setState}
                        type="button"
                        className="incomplete">
                        Incomplete
                    </button>)
                }
            </div>
            <div className="actions">
                <button
                type="button"
                className="btn btn-primary"
                onClick={()=>selectEdit(task)}
                >edit</button>
                <button
                 type="button"
                className="btn btn-secundary"
                onClick={()=>{deleteTask(task.task_id); TaskinProject(actualProject[0]._id)}}
                >delete</button>
            </div>
        </li>
    );
}

export default Task;