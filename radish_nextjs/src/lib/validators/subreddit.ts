import { z } from "zod";

export const SubRedditValidator = z.object({
  name: z.string().min(3).max(21),
});

export const SubRedditSubscriptionValidator = z.object({
  subredditId: z.string(),
});

export type CreateSubRedditPayload = z.infer<typeof SubRedditValidator>;
export type SubscribeToSubRedditPayloda = z.infer<
  typeof SubRedditSubscriptionValidator
>;
