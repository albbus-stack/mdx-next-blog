import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/future/image";
import Link from "next/link";
import path from "path";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Layout from "../../components/Layout";
import { MetaProps } from "../../types/layout";
import { PostType } from "../../types/post";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { getAllPosts, PostItems } from "../../lib/api";
import PostNavCard from "../../components/PostNavCard";
import { WEBSITE_HOST_URL, WEBSITE_MAIN_AUTHOR } from "../../utils/config";
import remarkUnwrapImages from "remark-unwrap-images";

const components = {
  Image,
  img: (props) => {
    const imgClass =
      "overflow-hidden mx-auto " +
      (props.title.includes("round") ? "rounded-md" : "") +
      (props.title.includes("small") ? " md:w-3/4" : "");

    return (
      <figure>
        <div className={imgClass}>
          <Image
            src={"/images/" + props.src}
            alt={props.alt}
            className={imgClass}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>

        <figcaption>{props.alt}</figcaption>
      </figure>
    );
  },
  a: (props) => (
    <Link href={props.href} scroll={false}>
      <a>{props.children}</a>
    </Link>
  ),
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
  recentPosts: PostItems;
};

const PostPage: React.FC<PostPageProps> = ({
  source,
  frontMatter,
  recentPosts,
}) => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    description: frontMatter.description,
    author: frontMatter.author ?? WEBSITE_MAIN_AUTHOR,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: "article",
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1 className="mb-3 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          {customMeta.author +
            " on " +
            format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
        </p>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
      {recentPosts[0] !== null || recentPosts[1] !== null ? (
        <div className="mt-10 flex justify-between flex-row flex-wrap gap-5">
          {recentPosts[1] !== null ? (
            <PostNavCard recentPost={recentPosts[1]} direction="forward" />
          ) : (
            <div></div>
          )}
          {recentPosts[0] !== null ? (
            <PostNavCard recentPost={recentPosts[0]} direction="back" />
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  // Find the current post and choose the post navigation strategy
  const posts = getAllPosts(["date", "description", "slug", "title", "image"]);
  const postIndex = posts.findIndex((post) => post.slug === params.slug);

  let recentPosts = [null, null] as PostItems[];
  if (postIndex === posts.length - 1) {
    recentPosts[1] = posts.length >= 2 ? posts[posts.length - 2] : null;
  } else if (postIndex === 0) {
    recentPosts[0] = posts.length >= 2 ? posts[1] : null;
  } else {
    recentPosts[1] = posts.length >= 3 ? posts[postIndex - 1] : null;
    recentPosts[0] = posts.length >= 3 ? posts[postIndex + 1] : null;
  }

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles"), remarkUnwrapImages],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      recentPosts: recentPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
