'use client';
import { ChangeEvent, useState } from 'react';
import { useQueryTodo } from '@/app/_hooks/useQueryTodo';

export const ClientTodo: React.FC = () => {
  const [id, setId] = useState('1');
  const { data: todo, refetch } = useQueryTodo(id);

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
      <button onClick={() => refetch()}>refetch</button>

      {todo && (
        <div className='border'>
          <p>{`id:${todo.id}`}</p>
          <p>{`userId:${todo.userId}`}</p>
          <p>{`title:${todo.title}`}</p>
        </div>
      )}
    </div>
  );
};
