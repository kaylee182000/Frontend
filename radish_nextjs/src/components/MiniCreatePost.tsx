"use client";

import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { ImageIcon, Link2, PencilIcon } from "lucide-react";

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost = ({ session }: MiniCreatePostProps) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
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
          className="focus-visible:ring-0 hidden md:inline-block"
        />

        <Button
          variant="ghost"
          onClick={() => router.push(pathName + "/submit")}
          className="md:hidden inline-block"
        >
          <PencilIcon className="text-zinc-600" />
        </Button>

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
