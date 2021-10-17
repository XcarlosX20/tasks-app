import React,{useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import alertContext from '../../Context/Alerts/AlertContext';
import authContext from '../../Context/Auth/AuthContext';
const Login = (props) => {
    const {alert, showAlert} = useContext(alertContext);
    const {auth, login, alertAuth} = useContext(authContext)
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        if(data.password.length < 6){
        showAlert("check the requeriments", "alert-error");
        }else{
            const {email,password} = data;
            login(email,password);
        }
    }
    useEffect(() => {
        if(auth){
            props.history.push("/projects");
        }
        if(alertAuth){
            showAlert(alertAuth.msg, alertAuth.category);
         }
    }, [auth, props.history, alertAuth, showAlert])
    return ( 
        <>
            <div className="form-user">
            {alert ? <div className={`alert ${alert.category}`}>{alert.msg}</div>: null}
            <div className="container-form shadow-dark">
                <h1>Log in</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="fulanito@mail.com"
                            required
                            {...register("email")}
                        />
                    </div>

                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="******"
                            required
                            {...register("password",{ minLength: 6, maxLength: 20})}
                        />
                         {errors.password && <span>between 6 to 20 characters</span>}
                    </div>

                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Log in" />
                    </div>
                </form>

                <Link to={'/new-account'} className="href-account">
                    Get account
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default Login;