import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      {/* Routes here */}
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />

      {/* Any redirects */}
      <Route path="/" element={<Navigate replace to="/home" />} />

      {/* Last is a catch-all route that will show a not found view */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
