import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import NotFoundScreen from "./views/NotFoundScreen";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes here */}
        <Route exact path="/home" component={HomeScreen} />
        {/* <Route path="/error/:errorCode" component={ErrorScreen} /> */}

        {/* Any redirects */}
        <Redirect exact path="/" to="/home" />

        {/* Last is a catch-all redirect that will show an error view */}
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default App;
