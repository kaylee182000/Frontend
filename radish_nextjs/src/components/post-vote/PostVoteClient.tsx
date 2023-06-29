"use client";

import { useCustomToast } from "@/hooks/use-custom-toast";
import { usePrevious } from "@mantine/hooks";
import { VoteType } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostVoteClientProps {
  postId: string;
  initialVotesAmt: number;
  initialVote?: VoteType | null;
}

const PostVoteClient = ({
  postId,
  initialVotesAmt,
  initialVote,
}: PostVoteClientProps) => {
  const { loginToast } = useCustomToast();

  const [voteAmt, setVoteAmt] = useState<number>(initialVotesAmt);

  const [currentVote, setCurrentVote] = useState(initialVote);

  const prevVote = usePrevious(currentVote);

  useEffect(() => {
    setCurrentVote(initialVote);
  }, [initialVote]);

  return (
    <div className="flex gap-2 bg-zinc-100 rounded-full">
      <Button size="sm" variant="ghost" aria-label="upvote">
        <ArrowBigUp
          className={cn(
            "h-5 w-5 text-zinc-700 hover:text-green-rad hover:fill-green-rad",
            {
              "text-red-rad fill-red-rad": currentVote === "UP",
            }
          )}
        />
      </Button>

      <p className="text-center py-2 font-medium text-sm text-zinc-900 cursor-default">
        {voteAmt}
      </p>

      <Button size="sm" variant="ghost" aria-label="upvote">
        <ArrowBigDown
          className={cn(
            "h-5 w-5 text-zinc-700  hover:text-red-rad hover:fill-red-rad",
            {
              "text-yellow-rad fill-yellow-rad": currentVote === "DOWN",
            }
          )}
        />
      </Button>
    </div>
  );
};

export default PostVoteClient;
