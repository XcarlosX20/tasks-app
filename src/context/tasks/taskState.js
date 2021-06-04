import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {TASKS_PROJECT, ADD_TASK, DELETE_TASK, ACTUAL_TASK,
 CHANGE_STATE_TASK, EDIT_TASK} from '../../types/';
const TaskState = props => {
   const initialState = {
        tasks : [
            {idTask:1,taskName: "programming", state: true, id:1},
            {idTask:2,taskName: "fix the react-weather at background", state: false, id:2},
            {idTask:3,taskName: "csm", state: false, id:3},
            {idTask:4,taskName: "baby", state: false, id:3},
            {idTask:5,taskName: "idk", state: true, id:4},
            {idTask:6,taskName: "eat a banana", state: false, id:4}
        ],
        taskProject: null,
        taskSelected: null
    }
    const [state, dispatch] = useReducer(TaskReducer, initialState);
    //get tasks of a project
     const getTasks = (id) => {
         dispatch({
             type: TASKS_PROJECT,
             payload: id
         })
     }
     //add a task to projects
     const addTask = (task) => {
         dispatch({
             type: ADD_TASK,
             payload: task
         })
     }
     //delete a task
     const deleteTask = (idTask) => {
        dispatch({
            type: DELETE_TASK,
            payload: idTask
        })
     }
     // current task set 
    const actualTask = (Task) => {
         dispatch({
             type:ACTUAL_TASK,
             payload: Task
         })
     }
     //change the state of a task (complete or incomplete)
    const changeStateTask = (task) => {
        dispatch({
            type: CHANGE_STATE_TASK,
            payload: task
        })
    }
    const editTask = (taskSelected) => {
        dispatch({
            type: EDIT_TASK,
            payload: taskSelected
        })
    }
    return(
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            taskProject: state.taskProject,
            taskSelected: state.taskSelected,
            getTasks,
            addTask,
            deleteTask,
            actualTask,
            changeStateTask,
            editTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState; 