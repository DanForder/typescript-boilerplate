import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./styles/main.scss";
import HomeView from "./views/home/HomeView";
import NotFoundView from "./views/notFound/NotFoundView";

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
