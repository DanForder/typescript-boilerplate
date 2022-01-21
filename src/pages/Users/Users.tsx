import { Fragment, useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getUsers } from "../../data/api";
import UserData from "../../types/internal/UserData";

// to see this page component action, append this to your URL: "/users" 🧐
// TODO: Add section in readme breaking down this component
const Users = () => {
  const [users, setUsers] = useState<UserData[] | null>();

  useEffect(() => {
    (async () => {
      setUsers((await getUsers()) ?? null);
    })();
  }, []);

  const usersTsx = useCallback(
    (users: UserData[] | null) =>
      users && users.length > 0 ? (
        users.map((user) => (
          <Fragment key={user.id}>
            <h2>{user.fullName}</h2>
            <p>User Id: {user.id}</p>
          </Fragment>
        ))
      ) : (
        <span>Sorry, no users found</span>
      ),
    []
  );

  return (
    <Layout>
      <h1>Users</h1>
      {users !== undefined ? usersTsx(users) : <span>Loading...</span>}
    </Layout>
  );
};

export default Users;
