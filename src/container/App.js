import Navbar from '../components/layout/Navbar';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from '../pages/Home';

function App() {
  return (
    <div className="overflow-x-hidden font-poppins ">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
