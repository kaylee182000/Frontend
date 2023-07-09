"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

const OtherOption = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white shadow-md align='end' border border-zinc-200 py-1 rounded-lg w-[120px]">
        <DropdownMenuItem>
          <Link href={"/"} className="text-zinc-500 text-sm text-center w-full">
            Delete
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OtherOption;
