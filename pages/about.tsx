import Layout from "../components/Layout";
import { NextPage } from "next";

export const About: NextPage = () => {
  return (
    <Layout
      customMeta={{
        title: "About",
      }}
    >
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
