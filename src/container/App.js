import Navbar from '../components/layout/Navbar';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from '../components/pages/Home';
import Features from '../components/pages/Features';
import Footer from '../components/layout/Footer';
import NotFound from '../components/NotFound';

function App() {
  return (
    <div className="xl:overflow-x-hidden font-poppins ">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/features' component={Features} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
