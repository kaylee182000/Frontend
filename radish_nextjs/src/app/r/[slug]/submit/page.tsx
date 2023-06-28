import React from "react";
import { Editor } from "@/components";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const subreddit = await db?.subreddit.findFirst({
    where: {
      name: params.slug,
    },
  });
  if (!subreddit) return notFound();

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="border-b border-gray-200 pb-5">
        <div className="-mt-2 -ml-2 flex flex-wrap items-baseline">
          <h3 className="ml-2 mt-2 font-semibold text-2xl leading-6 text-red-rad">
            Create Post
          </h3>
          <p className="ml-2 mt-1 truncate text-sm text-gray-500">
            in r/{params.slug}
          </p>
        </div>
      </div>

      {/* form */}
      <Editor subredditId={subreddit.id} />

      <div className="w-full flex justify-end">
        <Button
          type="submit"
          className="w-full hover:bg-red-rad"
          form="subreddit-post-form"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default page;
