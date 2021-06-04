import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
const NewProject = () => {
    //initial state form
    const projectContext = useContext(ProjectContext);
    const { newProject, errorForm, showForm, addProject, validateProject } = projectContext;
    const [project, setProject] = useState({
        projectName: ""
    })
    const onChangeProject = (e) => {
        setProject({
            ...project, [e.target.name]: e.target.value
        })
    }
    const onSubmitProject = (e) => {
        e.preventDefault();
        if(project.projectName === ""){
            validateProject();
            return;
        }
        //add to global state
        addProject(project);
        setProject({
            projectName: ""
        })
        
    }
    return (
        <Fragment>
            <button onClick={() => showForm()}
                type="button"
                className="btn btn-block btn-primario">
                New Project
            </button>
            {newProject ?
                (
                    <form onSubmit={onSubmitProject}
                        className="formulario-nuevo-proyecto">
                        <input type="text"
                            onChange={onChangeProject}
                            value={project.projectName}
                            name="projectName"
                            className="input-text"
                            placeholder="Project name" />
                       { errorForm ? <p className="err-newproject">This field is required*</p> : null}
                        <input type="submit"
                            className="btn btn-primario btn-block"
                            value="Create new project" />
                    </form>
                ) :
                null}
        </Fragment>
    );
}

export default NewProject;