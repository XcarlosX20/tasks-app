import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Components/Login";
import NewAccount from "./Components/NewAccount";
import Projects from "./Components/Projects";
import ProjectState from './Context/Projects/ProjectState';
import TasksState from './Context/Tasks/TasksState';
function App() {
  return (
    <ProjectState>
      <TasksState>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/newaccount" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TasksState>
    </ProjectState>
  );
}

export default App;
