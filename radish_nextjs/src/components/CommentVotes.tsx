"use client";
import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/use-toast";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { cn } from "@/lib/utils";
import { CommentVoteRequest } from "@/lib/validators/vote";
import { usePrevious } from "@mantine/hooks";
import { CommentVote, VoteType } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useState } from "react";

interface CommentVotesProps {
  commentId: string;
  votesAmt: number;
  currentVote?: PartialVote;
}

type PartialVote = Pick<CommentVote, "type">;

const CommentVotes = ({
  commentId,
  votesAmt: _votesAmt,
  currentVote: _currentVote,
}: CommentVotesProps) => {
  const { loginToast } = useCustomToast();
  const [votesAmt, setVotesAmt] = useState<number>(_votesAmt);
  const [currentVote, setCurrentVote] = useState<PartialVote | undefined>(
    _currentVote
  );
  const prevVote = usePrevious(currentVote);

  const { mutate: vote } = useMutation({
    mutationFn: async (type: VoteType) => {
      const payload: CommentVoteRequest = {
        voteType: type,
        commentId,
      };

      await axios.patch("/api/subreddit/post/comment/vote", payload);
    },
    onError: (err, voteType) => {
      if (voteType === "UP") setVotesAmt((prev) => prev - 1);
      else setVotesAmt((prev) => prev + 1);

      // reset current vote
      setCurrentVote(prevVote);

      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      return toast({
        title: "Something went wrong.",
        description: "Your vote was not registered. Please try again.",
        variant: "destructive",
      });
    },
    onMutate: (type: VoteType) => {
      if (currentVote?.type === type) {
        // User is voting the same way again, so remove their vote
        setCurrentVote(undefined);
        if (type === "UP") setVotesAmt((prev) => prev - 1);
        else if (type === "DOWN") setVotesAmt((prev) => prev + 1);
      } else {
        // User is voting in the opposite direction, so subtract 2
        setCurrentVote({ type });
        if (type === "UP") setVotesAmt((prev) => prev + (currentVote ? 2 : 1));
        else if (type === "DOWN")
          setVotesAmt((prev) => prev - (currentVote ? 2 : 1));
      }
    },
  });

  return (
    <div className="flex gap-1 bg-zinc-100 rounded-full w-fit">
      {/* upvote */}
      <Button
        onClick={() => vote("UP")}
        size="xs"
        variant="ghost"
        aria-label="upvote"
        className="bg-transparent hover:bg-transparent"
      >
        <ArrowBigUp
          className={cn(
            "h-5 w-5 text-zinc-700 hover:text-green-rad hover:fill-green-rad",
            {
              "text-green-rad fill-green-rad": currentVote?.type === "UP",
            }
          )}
        />
      </Button>

      {/* score */}
      <p className="text-center py-2 px-1 font-medium text-xs text-zinc-900">
        {votesAmt}
      </p>

      {/* downvote */}
      <Button
        onClick={() => vote("DOWN")}
        size="xs"
        // className={cn({
        //   "text-emerald-500": currentVote?.type === "DOWN",
        // })}
        variant="ghost"
        aria-label="downvote"
        className="bg-transparent hover:bg-transparent"
      >
        <ArrowBigDown
          className={cn(
            "h-5 w-5 text-zinc-700  hover:text-red-rad hover:fill-red-rad",
            {
              "text-red-rad fill-red-rad": currentVote?.type === "DOWN",
            }
          )}
        />
      </Button>
    </div>
  );
};

export default CommentVotes;
