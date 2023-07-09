import { GeneralFeed, Icon, SkeletonLoading } from "@/components";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl">News Feed</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 gap-y-4 md:gap-y-4 py-6">
        {/* feed */}
        <Suspense fallback={<SkeletonLoading />}>
          {/* @ts-expect-error Server Component */}
          <GeneralFeed />
        </Suspense>
        {/* subreddit info */}
        <div className="flex flex-col order-first lg:order-last gap-4">
          {/* create community */}
          <div className="overflow-hidden h-fit rounded-lg border border-gray-200 shadow-xl">
            <div className="bg-red-rad px-6 py-4">
              <p className="font-semibold py-3 flex items-center gap-2 text-white">
                <HomeIcon className="w-4 h-4 text-white" />
                Home
              </p>
            </div>

            <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <p className="text-zinc-500">
                  Your personal Radishes homepage. Come here to check in with
                  your favorite communities.
                </p>
              </div>

              <Link
                href={"/r/create"}
                className={buttonVariants({
                  className: "w-full mt-4 mb-6",
                })}
              >
                Create Community
              </Link>
            </div>
          </div>
          {/* join to post */}
          {!session && (
            <div className="overflow-hidden h-fit py-4 px-6 rounded-lg border bg-white border-gray-200 hidden lg:block shadow-xl">
              <p className="text-zinc-500 text-sm leading-6">
                Create an account to follow your favorite communities and start
                taking part in conversations.
              </p>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    className: "w-full mt-4 mb-4",
                  }),
                  "bg-green-rad hover:bg-green-rad"
                )}
              >
                Join
              </Link>
            </div>
          )}

          <div className="mt-6 lg:block hidden">
            <div className="flex justify-center items-center gap-1 ">
              <Icon.logo className="w-3 h-3" />
              <p className="text-xs text-zinc-500">
                Radishes, Inc. © 2023. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
