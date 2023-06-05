import { FC } from 'react';
import { useQueryTodo } from '@/app/_hooks/useQueryTodo';

type Props = {
  id: string;
};
export const TodoItem: FC<Props> = ({ id }) => {
  const { data: todo } = useQueryTodo(id);

  return (
    todo && (
      <div className='border'>
        <p>{`id:${todo.id}`}</p>
        <p>{`userId:${todo.userId}`}</p>
        <p>{`title:${todo.title}`}</p>
      </div>
    )
  );
};
