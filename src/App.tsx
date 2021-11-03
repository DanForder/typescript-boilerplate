import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes here */}
        <Route exact path="/home" component={HomeView} />

        {/* Any redirects */}
        <Redirect exact path="/" to="/home" />

        {/* Last is a catch-all route that will show a not found view */}
        <Route component={NotFoundView} />
      </Switch>
    </Router>
  );
};

export default App;
