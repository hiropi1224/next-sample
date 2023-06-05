'use client';
import { useQuery } from '@tanstack/react-query';
import { zTodo } from '@/app/_type/todo';
import { sleep } from '@/app/_utils/sleep';

const getTodo = async (id: string) => {
  await sleep(3000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  const todo = zTodo.parse(data);

  return todo;
};

export const useQueryTodo = (id: string) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodo(id),
    cacheTime: 0,
    staleTime: 0,
  });
};
