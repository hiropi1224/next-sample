import { zTodo, zTodos } from '@/app/_type/todo';

export const todo = {
  getTodos: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    const todos = zTodos.parse(data);

    return todos;
  },

  getTodo: async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await res.json();
    const todo = zTodo.parse(data);

    return todo;
  },
};
