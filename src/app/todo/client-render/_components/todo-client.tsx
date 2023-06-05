'use client';
import { ChangeEvent, Suspense, useState } from 'react';
import { TodoItem } from '@/app/todo/client-render/_components/todo-item';

export const ClientTodo: React.FC = () => {
  const [id, setId] = useState('1');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setId(e.target.value);

  return (
    <div>
      <h1>Todos</h1>
      <select value={id} onChange={handleSelectChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>

      <h2>{`${id}: TODO`}</h2>
      <Suspense fallback={<Loading />}>
        <TodoItem id={id} />
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
