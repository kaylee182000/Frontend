import { INFINITE_SCROLLING_PAGINATION_RESULT } from "@/config";
import { db } from "@/lib/db";
import React, { Suspense } from "react";
import PostFeed from "./PostFeed";
import { getAuthSession } from "@/lib/auth";
import SkeletonLoading from "./SkeletonLoading";

const CustomFeed = async () => {
  const session = await getAuthSession();
  const followedCommunities = await db!.subscription.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      subreddit: true,
    },
  });

  const posts = await db!.post.findMany({
    where: {
      subreddit: {
        name: {
          in: followedCommunities.map(({ subreddit }) => subreddit.id),
        },
      },
    },
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

export default CustomFeed;
