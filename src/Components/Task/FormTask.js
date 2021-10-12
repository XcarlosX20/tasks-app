import React,{useContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from '../../Context/Projects/ProjectContext';
import TasksContext from '../../Context/Tasks/TasksContext';
const FormTask = () => {
    const {actualProject} = useContext(ProjectContext);
    const {addTask, TaskinProject, taskEdit, selectEdit, uploadTask} = useContext(TasksContext);
    const [newTask, setNewTask] = useState({task_name: "", state: false, project_id: null});
    useEffect(() => {
       const setActualProject = () => {
        if(actualProject !== null && actualProject.length ){
            setNewTask({...newTask, project_id: actualProject[0]._id })
           }
           TaskinProject();
       }
       setActualProject();
       //eslint-disable-next-line
    }, [actualProject]);
    useEffect(() => {
        const taskEditFN = () => {
            if(taskEdit){
               setNewTask(taskEdit)
            }
           }
           taskEditFN();
    }, [taskEdit])
    if (!actualProject) return null;
    const onSubmit = async (e) => {
        e.preventDefault();
        if(newTask.task_name === ""){
            return
        }else{
            //new task
            if(taskEdit === null){
                newTask.task_id = uuidv4();
                addTask(newTask);
                
            }else{ 
                //edit
               uploadTask(newTask)
                selectEdit(null);
            }
            TaskinProject(newTask.project_id);
            setNewTask({task_name: "", project_id:actualProject[0]._id , state: false});
        }
    }
    const handleInput = (e) => {
        setNewTask({...newTask, [e.target.name] : e.target.value})
    }
    return ( 
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="container-input">
                    <input type="text"
                     name="task_name"
                     value={newTask.task_name}
                     onChange={handleInput}
                     className="input-text"
                     placeholder="Type the task..."
                     required/>
                </div>
                <div className="container-input">
                    <input type="submit" 
                     className="btn btn-primary btn-submit btn-block"
                     value={taskEdit ? "Edit task": "Add task"}/>
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;