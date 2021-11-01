import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import "./styles/main.scss";
import HomeView from "./views/Home";

const Error: React.FC = () => <h1>Error 404- Page not found</h1>;

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes here */}
        <Route exact path="/home" component={HomeView} />

        {/* Any redirects */}
        <Redirect exact path="/" to="/home" />

        {/* Last Route is a catch-all that will show an error page */}
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
