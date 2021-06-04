import React, {useContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';
const FormTask = () => {
    const projectContext = useContext(ProjectContext);
    const {projectSelected} = projectContext;
    const taskContext = useContext(TaskContext)
    const {taskSelected, addTask, getTasks, editTask,taskProject} = taskContext;
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
        if(taskSelected === null ) {
            // add the new task to the task state
            newTask.id = projectSelected[0].id;
            newTask.idTask = uuidv4();
            newTask.state = false;
            addTask(newTask);
        } else {
            // update existing task
            editTask(newTask);
        }
        // Get and filter the tasks in the current project
        getTasks(taskProject[0].id)
    }
    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input onChange={handleChange} type="text" 
                    placeholder="add the task name"
                    value={newTask.taskName}
                    name="taskName"
                    className="input-text" />
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