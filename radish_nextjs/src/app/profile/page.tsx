import { PostFeed, UserAvatar } from "@/components";
import { INFINITE_SCROLLING_PAGINATION_RESULT } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import React from "react";

const page = async () => {
  const session = await getAuthSession();

  const communityQuantity = await db?.subscription.count({
    where: {
      userId: session?.user.id,
    },
  });

  const postQuantity = await db?.post.count({
    where: {
      authorId: session?.user.id,
    },
  });

  const posts = await db!.post.findMany({
    where: {
      authorId: session?.user.id,
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
    <div className="sm:container max-w-7xl mx-auto h-full">
      <div className="flex justify-center pb-6">
        <div className="flex gap-5">
          <UserAvatar user={session!.user} className="h-24 w-24" />
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-2xl text-black">
              {session?.user.name}
            </h2>
            <div className="flex gap-4 items-center">
              <p className="text-zinc-500 text-md">
                <span className="font-semibold text-black">{postQuantity}</span>{" "}
                posts
              </p>
              <p className="text-zinc-500 text-md">
                <span className="font-semibold text-black">
                  {communityQuantity}
                </span>{" "}
                communities
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-6" />
      {/* personal post  */}
      <div className="py-4">
        <PostFeed initialPosts={posts} />
      </div>
    </div>
  );
};

export default page;
