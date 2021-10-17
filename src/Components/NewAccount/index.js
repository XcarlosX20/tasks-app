import React,{useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import alertContext from '../../Context/Alerts/AlertContext';
import authContext from '../../Context/Auth/AuthContext';
const NewAccount = (props) => {
    const {alert, showAlert} = useContext(alertContext);
    const {registerUser, alertAuth, auth} = useContext(authContext);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        if(data.password.trim() !== data.pass_repeat.trim()){
            showAlert("the passwords are not the same", "alert-error");
        }else{
            //register user
            const {name, email, password} = data;
            registerUser(name, email, password);
        }
    }
    useEffect(() => {
        if(alertAuth){
           showAlert(alertAuth.msg, alertAuth.category);
        }
        if(auth){
            props.history.push("/projects");
        }
    }, [alertAuth, auth, props.history, showAlert])
    return ( 
        <>
            <div className="form-user">
                {alert ? <div className={`alert ${alert.category}`}>{alert.msg}</div>: null}
            <div className="container-form shadow-dark">
                <h1>Get a new account</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="field-form">
                        <label htmlFor="nombre">Name</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            required
                            {...register("name")}
                        />
                    </div>

                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            {...register("email")}
                            required
                        />
                    </div>

                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            {...register("password", { minLength: 6, maxLength: 20})}
                            required
                        />
                        {errors.password && <span>between 6 to 20 characters</span>}
                    </div>

                    <div className="field-form">
                        <label htmlFor="confirmar">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat yor password"
                            {...register("pass_repeat",{ minLength: 6, maxLength: 20})}
                            required
                        />
                         {errors.pass_repeat && <span>between 6 to 20 characters</span>}
                    </div>

                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Register" />
                    </div>
                </form>

                <Link to={'/login'} className="href-account">
                    Go to Log in
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default NewAccount;