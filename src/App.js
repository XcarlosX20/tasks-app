import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Components/Login"; 
import NewAccount from "./Components/NewAccount"; 
import Projects from "./Components/Projects"; 
function App() {
  return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/newaccount" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
  );
}

export default App;
