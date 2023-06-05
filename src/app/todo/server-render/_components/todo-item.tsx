import { FC } from 'react';
import { zTodo } from '@/app/_type/todo';

type Props = {
  data: Promise<Response>;
};
export const TodoItem: FC<Props> = async ({ data }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await data;
  const d = await res.json();
  const todo = zTodo.parse(d);

  return (
    <div className='border'>
      <p>{`id:${todo.id}`}</p>
      <p>{`userId:${todo.userId}`}</p>
      <p>{`title:${todo.title}`}</p>
    </div>
  );
};
