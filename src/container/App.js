import Navbar from '../components/Navbar';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from '../pages/Home';

function App() {
  return (
    <div className="container mx-auto">
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
