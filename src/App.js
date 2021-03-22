import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import  Comments  from "./components/Comments/Comments";
import Dashboard from "./components/Dashboard/Dashboard";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/comments">
            <Comments/>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}