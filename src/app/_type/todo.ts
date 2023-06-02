import { z } from 'zod';

export const zTodo = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
export const zTodos = z.array(zTodo);

export type Todo = z.infer<typeof zTodo>;
export type Todos = z.infer<typeof zTodos>;
