import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { zTodo } from '@/app/_type/todo';
async function getTodo({ id = '1' }: { id?: string }) {
  // 意図的に遅延
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { tags: ['todos'], revalidate: 10000 },
  });
  const data = await res.json();
  const todos = zTodo.parse(data);

  return todos;
}

export default async function Todo() {
  const cookieStore = cookies();
  const id = cookieStore.get('id')?.value ?? undefined;
  const todo = await getTodo({ id });

  async function handleSubmit(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    cookies().set('id', id);

    revalidateTag('todos');
  }

  return (
    <div>
      <h1>Todo</h1>
      <form action={handleSubmit}>
        <select name='id'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
        </select>
        <button className='bg-pink-200' type='submit'>
          submit
        </button>
      </form>
      <div className='border'>
        <p>{`id:${todo.id}`}</p>
        <p>{`userId:${todo.userId}`}</p>
        <p>{`title:${todo.title}`}</p>
      </div>
    </div>
  );
}
