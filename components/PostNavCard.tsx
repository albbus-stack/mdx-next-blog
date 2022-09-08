import Link from "next/link";
import React from "react";

interface PostNavCardProps {
  recentPost: any;
  direction: "forward" | "back";
}

const PostNavCard: React.FC<PostNavCardProps> = ({ recentPost, direction }) => {
  return (
    <div className="bg-blue-100 dark:bg-gray-700 py-2 px-4 rounded-md">
      <Link href={recentPost["slug"]}>
        <a className=" dark:text-white text-gray-900">
          {direction === "forward" ? (
            <div className="inline-block rotate-180 translate-x-[-0.6rem] h-[111%]">
              &#10140; &nbsp;
            </div>
          ) : (
            ""
          )}
          {recentPost["title"]}
          {direction === "back" ? <> &nbsp;&#10140;</> : ""}
        </a>
      </Link>
    </div>
  );
};

export default PostNavCard;
