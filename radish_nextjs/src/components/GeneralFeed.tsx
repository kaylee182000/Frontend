import { INFINITE_SCROLLING_PAGINATION_RESULT } from "@/config";
import { db } from "@/lib/db";
import React, { Suspense } from "react";
import PostFeed from "./PostFeed";
import SkeletonLoading from "./SkeletonLoading";

const GeneralFeed = async () => {
  const posts = await db!.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      subreddit: true,
    },
    take: INFINITE_SCROLLING_PAGINATION_RESULT,
  });
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <PostFeed initialPosts={posts} />
    </Suspense>
  );
};

export default GeneralFeed;
