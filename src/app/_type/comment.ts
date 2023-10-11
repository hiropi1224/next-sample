import { z } from 'zod';

export const zComment = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
});
export const zComments = z.array(zComment);

export type Comment = z.infer<typeof zComment>;
export type Comments = z.infer<typeof zComments>;
