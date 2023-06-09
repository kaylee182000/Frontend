import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav, SearchBar, Icon } from "./";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="sticky top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icon.logo />
          <p className="hidden text-zinc-700 text-md font-medium md:block">
            Radishes
          </p>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({
              className: "text-center sm:text-sm text-xs",
            })}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
