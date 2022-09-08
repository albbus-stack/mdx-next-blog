import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "posts");

// This lists all the .mdx files available in POSTS_PATH
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
