import React from "react";
import Link from "next/link";

import { Icon } from "./";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* {logo} */}
        <Link href={"/"} className="flex gap-2 items-center">
          <Icon.logo />
          <p className="hidden text-zinc-700 text-xl font-medium md:block">
            Radishes
          </p>
        </Link>

        {/* {search bar} */}

        {/* {signin} */}
        {!session && (
          <Link
            href={"/sign-in"}
            className={cn(buttonVariants(), "hover:bg-red-rad")}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
