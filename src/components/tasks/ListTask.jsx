import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListTask = () => {
    const projectContext = useContext(ProjectContext);
    const { projectSelected, deleteProject, listProjects } = projectContext;
    const taskContext = useContext(TaskContext);
    const { taskProject } = taskContext;
    if (projectSelected === null || listProjects.length === 0) return <h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
    SELECT OR CREATE A PROJECT</h2>;
    const tasks = taskProject;
    return (
        <Fragment>
            <h2>{projectSelected[0].projectName}</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 ? (<li><p className="tarea">No pending tasks</p></li>)
                    :
                    <TransitionGroup>
                        {tasks.map(task => (
                            <CSSTransition key={task.idTask}
                                classNames="tarea"
                                timeout={200}>
                                <Task task={task} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button onClick={() => {
                deleteProject(projectSelected[0].id);
            }}
                type="button" className="btn btn-eliminar">
                Delete project &times;
        </button>
        </Fragment>
    );
}

export default ListTask;