import React, { useReducer } from 'react';
import TasksContext from "./TasksContext";
import {TasksReducer} from './TasksReducer';
import {TASK_PROJECT, ADD_TASK, DELETE_TASK, SET_STATE_TASK, SELECT_EDIT_TASK, UPLOAD_TASK} from "../../Types/index";
const TasksState = ({ children }) => {
    
    const initialState = {
        tasks: [
            {task_name: "mern", task_id: "2", state: false , id_project: 1},
            {task_name: "jam", task_id: "3", state: false , id_project: 2},
            {task_name: "lamp", task_id: "4", state: false , id_project: 3}
        ],
        taskProject:null,
        taskEdit: null
    }
    const [state, dispatch] = useReducer(TasksReducer, initialState);
    //fxs
    const TaskinProject = (id) => {
        dispatch({
            type: TASK_PROJECT, payload: id
        })
    }
    const addTask = (task) => {
        dispatch({
            type: ADD_TASK, payload: task
        })
    }
    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK, payload: id
        })
    }
    const setStateTask = (task) => {
        dispatch({
            type: SET_STATE_TASK, payload: task
        })
    }
    const selectEdit = (task) => {
        dispatch({
            type: SELECT_EDIT_TASK, payload: task
        })
    }
    const uploadTask = (task) => {
        dispatch({
            type: UPLOAD_TASK, payload: task
        })
    }
    return (
        <TasksContext.Provider value={{
            tasks: state.tasks,
            taskProject: state.taskProject,
            taskEdit: state.taskEdit,
            TaskinProject,
            addTask,
            deleteTask,
            setStateTask,
            selectEdit,
            uploadTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksState;