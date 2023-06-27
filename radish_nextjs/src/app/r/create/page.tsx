"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CreateSubRedditPayload } from "@/lib/validators/subreddit";
import { toast } from "@/hooks/use-toast";
import { useCustomToast } from "@/hooks/use-custom-toast";

const Page = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const { loginToast } = useCustomToast();

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubRedditPayload = {
        name: input,
      };
      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: "Subradish already exists",
            description: "Please choose a different subradish name.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 422) {
          return toast({
            title: "Invalid subradish name",
            description: "Please choose a name between 3 and 21 characters.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      toast({
        title: "There was an error.",
        description: "Could not create subradish.",
        variant: "destructive",
      });
    },

    onSuccess: (data) => {
      router.push(`/r/${data}`);
    },
  });

  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto">
      <div className="relative bg-white w-full h-fit rounded-lg shadow-xl border overflow-hidden">
        <div className="flex justify-between items-center bg-red-rad p-4">
          <h1 className="text-xl text-white font-semibold">
            Create a community
          </h1>
        </div>

        <hr className="bg-zinc-500 h-px" />

        <div className="p-4">
          <p className="text-lg font-medium mb-2">Name</p>
          <p className="text-xs pb-4 text-zinc-400">
            Community names including capitalization cannot be changed.
          </p>
          <div className="relative">
            <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-black">
              r/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-6 text-base text-zinc-400 focus-visible:outline-red-rad border-none outline outline-1 outline-zinc-200"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 pb-4 px-4">
          <Button variant="subtle" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            disabled={input.length === 0}
            onClick={() => createCommunity()}
          >
            Create Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
