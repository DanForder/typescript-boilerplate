import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getUser } from "../../data/api";
import UserData from "../../interfaces/internal/UserData";

// to see this page component action, append this to your URL: "/users/1" 🧐
// TODO: Add section in readme breaking down this component
type UserParams = {
  userId: string;
};

const User: React.FC = () => {
  const { userId } = useParams<UserParams>();
  const [user, setUser] = useState<UserData | null>();

  useEffect(() => {
    if (!userId) return;
    (async () => {
      setUser((await getUser(parseInt(userId))) ?? null);
    })();
  }, [userId]);

  const userTsx = useCallback(
    (user: UserData | null) =>
      user ? (
        <>
          <p>Name : {user?.fullName}</p>
          <p>User Id : {user?.id}</p>
        </>
      ) : (
        <span>Sorry, no user found with id of {userId}</span>
      ),
    [userId]
  );

  return (
    <Layout>
      <h1>User</h1>
      {user !== undefined ? userTsx(user) : <span>Loading...</span>}
    </Layout>
  );
};

export default User;
