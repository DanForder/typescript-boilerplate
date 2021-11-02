import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ErrorCode } from "../enums/ErrorCode";

const NotFoundScreen = () => (
  <Layout>
    <h1>Error {ErrorCode.NotFound} - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </Layout>
);

export default NotFoundScreen;
