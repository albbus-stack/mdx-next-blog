import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { MetaProps } from "../types/layout";
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_HOST_URL,
  WEBSITE_MAIN_AUTHOR,
  WEBSITE_NAME,
} from "../utils/config";

interface HeadProps {
  customMeta?: MetaProps;
}

const Head: React.FC<HeadProps> = ({ customMeta }) => {
  const router = useRouter();
  const meta: MetaProps = {
    title: WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    author: customMeta?.author ?? WEBSITE_MAIN_AUTHOR,
    image: `${WEBSITE_HOST_URL}/images/card-preview.png`,
    type: "website",
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta name="author" content={meta.author} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Your Blog" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
