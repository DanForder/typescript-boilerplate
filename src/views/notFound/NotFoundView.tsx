import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ErrorCode } from "../../enums/ErrorCode";

const NotFoundView = () => (
  <Layout>
    <h1>Error {ErrorCode.NOT_FOUND} - Not Found!</h1>
    <Link to="/">Home</Link>
  </Layout>
);

export default NotFoundView;
