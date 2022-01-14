// import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
// import { getUser, getUsers } from "../../data/api";
// import UserData from "../../interfaces/internal/UserData";

export const Home = () => {
  // const [user, setUser] = useState<UserData>();

  // useEffect(() => {
  //   getUser(1).then((userResponse) => {
  //     if (userResponse) {
  //       setUser(userResponse);
  //     }
  //   });
  // }, []);

  // const [users, setUsers] = useState<UserData[]>();

  // useEffect(() => {
  //   getUsers().then((usersResponse) => {
  //     if (usersResponse) {
  //       setUsers(usersResponse);
  //     }
  //   });
  // }, []);

  return (
    <Layout>
      {/* <p>{user?.fullName}</p>
      <p>{user?.id}</p> */}

      {/* {users?.map((user) => (
        <div
          key={user.id}
          style={{ border: "solid 5px black", marginBottom: "1rem" }}
        >
          <p>User: {user.fullName}</p>
          <p>User Id: {user.id}</p>
        </div>
      ))} */}
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      <Button
        label="Log to console"
        onClick={() => {
          console.log("button clicked");
        }}
      />
    </Layout>
  );
};

export default Home;
