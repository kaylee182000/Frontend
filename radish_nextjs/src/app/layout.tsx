import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { Toaster } from "@/components/ui/Toaster";
import Providers from "@/components/Providers";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Radishes",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen bg-white antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <NextTopLoader color="#fd394e" speed={500} showSpinner={false} />
          {authModal}
          <div className="container max-w-7xl mx-auto h-full pt-6">
            {children}
          </div>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
