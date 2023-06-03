import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { zTodo } from '@/app/_type/todo';
import { sleep } from '@/app/_utils/sleep';

const getTodo = async (id: string) => {
  const { data } = await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(await sleep(3000));
  const todo = zTodo.parse(data);

  return todo;
};

export const useQueryTodo = (id: string) => {
  return useQuery({
    queryKey: ['todo'],
    queryFn: () => getTodo(id),
  });
};
