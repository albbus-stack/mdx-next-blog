import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/future/image";
import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import { WEBSITE_MAIN_AUTHOR } from "../utils/config";

type IndexProps = {
  posts: PostType[];
};

export const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Next.js starter for your next blog commission. Built with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js + TypeScript</li>
        <li className="mt-2">Markdown with MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>
      <div className="flex flex-row flex-wrap justify-between">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className={
              (post.image !== undefined ? "w-[100%]" : "w-[100%] md:w-[46%]") +
              (posts[i + 1 === posts.length ? i : i + 1].image !== undefined &&
              posts[i - 1 === -1 ? i : i - 1].image !== undefined
                ? " md:w-[100%]"
                : "") +
              (posts[i + 1 === posts.length ? i : i + 1].image !== undefined &&
              posts[i - 1 === -1 ? i : i - 1].image === undefined &&
              posts[i - 2 === -1 ? i : i - 2].image === undefined
                ? " md:w-[100%]"
                : "") +
              " mt-10 flex items-center md:flex-row flex-col"
            }
          >
            <div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {(post?.author ?? WEBSITE_MAIN_AUTHOR) +
                  " on " +
                  format(parseISO(post.date), "MMMM dd, yyyy")}
              </p>
              <h1 className="mb-4 text-xl">
                <Link
                  as={`/posts/${post.slug}`}
                  href={`/posts/[slug]`}
                  scroll={false}
                >
                  <a className="text-fgLight dark:text-fgDark dark:hover:text-blue-400">
                    {post.title}
                  </a>
                </Link>
              </h1>
              <p className="mb-3 lg:mr-5 xl:mr-10">{post.description}</p>
            </div>
            {post.image !== undefined ? (
              <div className="md:w-[90%] md:h-[90%]  mx-auto pt-4 md:pl-10 lg:pr-4 xl:pl-0">
                <Image
                  src={"/images/" + post.image}
                  className="rounded-md min-w-[220px] md:min-w-[300px]"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : (
              <></>
            )}
          </article>
        ))}
      </div>
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
