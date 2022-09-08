import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import { WEBSITE_MAIN_AUTHOR } from "../components/Head";

type IndexProps = {
  posts: PostType[];
};

export const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Next.js starter for your next boring blog commition. Built with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">Markdown with MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

      {posts.map((post) => (
        <article key={post.slug} className="mt-10 flex lg:flex-row flex-col">
          <div>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {(post?.author ?? WEBSITE_MAIN_AUTHOR) +
                " on " +
                format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3 lg:mr-5 xl:mr-10">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </div>
          {post.image !== undefined ? (
            <div className="overflow-hidden md:w-[90%] md:h-[90%] xl:w-[80%] xl:h-[80%] mx-auto pt-2 md:p-5">
              <img src={post.image} />
            </div>
          ) : (
            <></>
          )}
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "date",
    "description",
    "slug",
    "title",
    "image",
    "author",
  ]);

  return {
    props: { posts },
  };
};

export default Index;
