import React, {useContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';
const FormTask = () => {
    const projectContext = useContext(ProjectContext);
    const {projectSelected} = projectContext;
    const taskContext = useContext(TaskContext)
    const {taskSelected, addTask, getTasks, editTask} = taskContext;
    //state of form
    const [newTask, setNewTask] = useState({
        taskName: ""
    })
    useEffect(()=>{
        if(taskSelected === null){
            setNewTask({taskName:""});
        }else{
            setNewTask(taskSelected);
        }
    },[taskSelected]);
    if (projectSelected === null) return null 
    const handleChange = (e) => {
        setNewTask({
            ...newTask, [e.target.name]:e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        getTasks(projectSelected[0].id);
        // add the new task to the task state
        newTask.id = projectSelected[0].id;
        newTask.idTask = uuidv4();
        newTask.state = false;
        
        
        if(!taskSelected || newTask === "") {
            return
        }else{
            editTask(newTask);
            addTask(newTask);
            getTasks(projectSelected[0].id);
            
        }
        // Get and filter the tasks in the current project
        
    }
    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input onChange={handleChange} type="text" 
                    placeholder="add the task name"
                    value={newTask.taskName}
                    name="taskName"
                    className="input-text"
                    required />
                </div>
                <div className="contenedor-input">
                    <input type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={taskSelected ? "Edit task" : "Add task" } />
                </div>
            </form>
        </div>
    );
}

export default FormTask;