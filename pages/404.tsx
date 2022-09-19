import Layout from "../components/Layout";
import { NextPage } from "next";

export const PageNotFound: NextPage = () => {
  return (
    <Layout
      customMeta={{
        title: "Page not found",
      }}
    >
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <h1>404</h1>
        <div className="bg-gray-900 dark:bg-white w-5 h-[.18rem] skew-x-[-25deg] mb-6"></div>
        <p>This page could not be found</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
