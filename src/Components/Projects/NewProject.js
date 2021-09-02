import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
const NewProject = () => {
    const [newProject, setNewProject] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        setNewProject(data);
        e.target.reset();
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primary">New Project
            </button>
            <form className="form-new-project" onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    className="input-text"
                    placeholder="Project name"
                    name="projectName"
                    {...register("projectName", { required: true})}
                    />
                     {/* errors will return when field validation fails  */}
                    {errors.projectName && <p className="err-newproject">This field is required</p>}
                <input type="submit"
                    className="btn btn-primary btn-block"
                    value="Add project" />
                
            </form>

        </>
    );
}

export default NewProject;