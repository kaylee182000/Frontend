import React from "react";
import { notFound } from "next/navigation";

import { db } from "@/lib/db";

import { getAuthSession } from "@/lib/auth";

import { MiniCreatePost, PostFeed, SubscribeLeaveToggle } from "@/components";

import { INFINITE_SCROLLING_PAGINATION_RESULT } from "@/config";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;

  const session = await getAuthSession();

  const subreddit = await db?.subreddit.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
          comments: true,
          subreddit: true,
        },
        orderBy: {
          createdAt: "desc", //just change this to "desc" to avoid duplication
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULT,
      },
    },
  });

  if (!subreddit) {
    return notFound();
  }

  const subscription = !session?.user
    ? undefined
    : await db?.subscription.findFirst({
        where: {
          subreddit: {
            name: slug,
          },
          user: {
            id: session.user.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  return (
    <>
      <div className="flex content-center sm:justify-start justify-between gap-4">
        <h1 className="font-bold text-3xl md:text-4xl h-14">
          r/{subreddit.name}
        </h1>
        {subreddit.creatorId !== session?.user.id ? (
          <SubscribeLeaveToggle
            subredditId={subreddit.id}
            subredditName={subreddit.name}
            isSubscribed={isSubscribed}
          />
        ) : null}
      </div>
      <MiniCreatePost session={session} />
      <PostFeed initialPosts={subreddit.posts} subredditName={subreddit.name} />
    </>
  );
};

export default page;
