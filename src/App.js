import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { tokenAuth } from './Axios';
import Login from "./Components/Login";
import NewAccount from "./Components/NewAccount";
import Projects from "./Components/Projects";
import PrivateRoute from './Components/Routes/PrivateRoute';
import AlertState from './Context/Alerts/AlertState';
import AuthState from './Context/Auth/AuthState';
import ProjectState from './Context/Projects/ProjectState';
import TasksState from './Context/Tasks/TasksState';
function App() {
  const token = localStorage.getItem('token');
  if(token){
    tokenAuth(token);
  }
  return (
    <AuthState>
    <AlertState>
    <ProjectState>
      <TasksState>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/new-account" component={NewAccount} />
            <PrivateRoute path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TasksState>
    </ProjectState>
    </AlertState>
    </AuthState>
  );
}

export default App;
