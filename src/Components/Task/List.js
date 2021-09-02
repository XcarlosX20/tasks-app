import React from 'react';
import Task from "./Task";
const List = () => {
    const tasks = [
        {taskName: "hello", id: 3},
        {taskName: "bye", id: 4}
    ]
    return ( 
        <>
            <h2>Project: Tienda Virtual</h2>
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
            type="button"
            className="btn"
            >Delete Project &times;</button>
        </>
     );
}
 
export default List;