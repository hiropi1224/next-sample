import { Suspense } from 'react';
import { TodoItem } from '@/app/todo/server-render/_components/todo-item';

type Props = {
  id: string;
};

export const ServerTodo: React.FC<Props> = async ({ id }) => {
  return (
    <div>
      <Suspense key={id} fallback={<Loading />}>
        <TodoItem
          data={fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            next: { tags: ['todos'], revalidate: 0 },
          })}
        />
      </Suspense>
    </div>
  );
};
function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
      <div className='mx-4 h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
      <div className='h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
    </div>
  );
}
