import { z } from "zod";

export const SubRedditValidator = z.object({
  name: z.string().min(3).max(15),
});

export const SubRedditSubscriptionValidator = z.object({
  subredditId: z.string(),
});

export type CreateSubRedditPayload = z.infer<typeof SubRedditValidator>;
export type SubscribeToSubredditPayload = z.infer<
  typeof SubRedditSubscriptionValidator
>;
