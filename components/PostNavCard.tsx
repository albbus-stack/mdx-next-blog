import Link from "next/link";
import React from "react";

interface PostNavCardProps {
  recentPost: any;
  direction: "forward" | "back";
}

const PostNavCard: React.FC<PostNavCardProps> = ({ recentPost, direction }) => {
  return (
    <div className="bg-accentLight dark:bg-accentDark py-2 px-4 rounded-md">
      <Link href={recentPost["slug"]}>
        <a className="text-fgLight dark:text-fgDark">
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
