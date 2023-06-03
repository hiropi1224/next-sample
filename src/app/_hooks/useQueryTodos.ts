import { useQuery } from '@tanstack/react-query';
import { zTodos } from '@/app/_type/todo';
import { sleep } from '@/app/_utils/sleep';

const getTodos = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=3'
  ).then(await sleep(5000));

  const data = await res.json();
  const todos = zTodos.parse(data);

  return todos;
};

export const useQueryTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};
