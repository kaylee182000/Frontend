import React from "react";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ToFeedButton } from "@/components";

const Layout = async ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
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
        },
      },
    },
  });

  const memberCount = await db?.subscription.count({
    where: {
      subreddit: {
        name: slug,
      },
    },
  });

  if (!subreddit) return notFound();

  return (
    <div className="sm:container max-w-7xl mx-auto h-full">
      <div>
        <ToFeedButton />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
          <div className="flex flex-col col-span-2 space-y-6">{children}</div>

          {/* info sidebar */}

          <div className="hidden lg:block overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last shadow-lg">
            <div className="px-6 py-4 bg-red-rad">
              <p className="font-semibold py-3 text-white">
                About r/{subreddit.name}
              </p>
            </div>
            <dl className="divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Created</dt>
                <dd className="text-gray-900 font-semibold">
                  <time dateTime={subreddit.createdAt.toDateString()}>
                    {format(subreddit.createdAt, "MMM d, yyyy")}
                  </time>
                </dd>
              </div>

              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Memebers</dt>
                <dd className="text-gray-900 font-semibold">
                  <div className="tetx-gray-900">{memberCount}</div>
                </dd>
              </div>

              {subreddit.creatorId === session?.user.id ? (
                <div className="gap-x-4 py-3">
                  <p className="text-gray-500">You created this community</p>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
