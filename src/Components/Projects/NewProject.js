import React, { useState, useContext} from 'react';
import ProjectContext from '../../Context/Projects/ProjectContext';
const NewProject = () => {
    const [newProject, setNewProject] = useState({project_name: ""})
    const [openForm, setOpenForm] = useState(false);
    const { addProject } = useContext(ProjectContext)
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if(newProject.project_name === ""){
            return
        }else{
            setOpenForm(false);
            await addProject(newProject);
            setNewProject({project_name: ""});
        }
    }
    const handleInput = (e) => {
        setNewProject({project_name: e.target.value});
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={()=>setOpenForm(true)}>New Project
                
            </button>
            {
                openForm ? (
                    <form className="form-new-project" onSubmit={onSubmit}>
                        <input type="text"
                            className="input-text"
                            placeholder="Project name"
                            name="project_name"
                            value={newProject.project_name}
                            onChange={handleInput}
                            required
                        />
                        <input type="submit"
                            className="btn btn-primary btn-block"
                            value="Add project" />

                    </form>
                )
                    : null
            }

        </>
    );
}

export default NewProject;