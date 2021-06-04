import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';
const Task = ({task}) => {
     const projectContext = useContext(ProjectContext);
     const {projectSelected} = projectContext;
     const taskContext = useContext(TaskContext);
     const {taskProject, deleteTask, getTasks, changeStateTask, actualTask} = taskContext;
     const changeStateTaskFn = (task) => {
          if(task.state){
               task.state = false
          }else
               task.state = true
          changeStateTask(task);
     }
     const selectTaskFn = (task) => {
          actualTask(task);
          
     }
    return ( 
       <li className="tarea sombra">
           <p>{task.taskName}</p>
           <div className="estado">
                {task.state ? (
                <button onClick={() => changeStateTaskFn(task)} type="button" className="completo">completed</button>
                ):
                (<button onClick={() => changeStateTaskFn(task)} type="button" className="incompleto">incomplete</button>)}
           </div>
           <div className="acciones">
                <button onClick={()=>selectTaskFn(task)} className="btn btn-primario">edit</button>
                <button onClick={()=>{
                     deleteTask(taskProject[0].idTask);
                     getTasks(projectSelected[0].id);
                }}
                className="btn btn-secundario">delete</button>
           </div>
       </li>
     );
}
 
export default Task;