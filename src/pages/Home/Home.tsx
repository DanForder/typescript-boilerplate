import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
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
