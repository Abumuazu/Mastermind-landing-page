import './App.css';
import "./assets/css/style.css";
import "./assets/css/style-dark.css";
import "./assets/css/vendor.bundle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Ambassador from './components/Ambassador/Ambassador';
import Homepage from './components/Homepage/Homepage';
function App() {
  AOS.init()
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Homepage></Homepage>
        </Route>
        <Route exact path="/ambassador">
            <Ambassador/>
        </Route>
       
      </Switch>
    </Router>

  );
}

export default App;
