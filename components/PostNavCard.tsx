import Link from "next/link";
import React from "react";

interface PostNavCardProps {
  recentPost: any;
  direction: "forward" | "back";
}

const PostNavCard: React.FC<PostNavCardProps> = ({ recentPost, direction }) => {
  return (
    <Link href={recentPost["slug"]} scroll={false}>
      <a className="text-fgLight dark:text-fgDark bg-accentLight dark:bg-accentDark py-[.6rem] px-4 rounded-md shadow-sm">
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
  );
};

export default PostNavCard;
