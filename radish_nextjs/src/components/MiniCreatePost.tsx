"use client";

import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { ImageIcon, Link2 } from "lucide-react";

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost = ({ session }: MiniCreatePostProps) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-md">
      <div className="h-full px-6 py-4 flex justify-between gap-6">
        <div className="relative">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />
          <span className="absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white" />
        </div>

        <Input
          readOnly
          onClick={() => router.push(pathName + "/submit")}
          placeholder="Create Post"
          className="pl-6 text-base text-zinc-400 focus-visible:outline-red-rad border-none outline outline-1 outline-zinc-200"
        />

        <Button
          variant="ghost"
          onClick={() => router.push(pathName + "/submit")}
        >
          <ImageIcon className="text-zinc-600" />
        </Button>

        <Button
          variant="ghost"
          onClick={() => router.push(pathName + "/submit")}
        >
          <Link2 className="text-zinc-600" />
        </Button>
      </div>
    </div>
  );
};

export default MiniCreatePost;
