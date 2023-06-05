import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { ServerTodo } from '@/app/todo/server-render/_components/todo-server';

export default async function Todo() {
  const cookieStore = cookies();
  const id = cookieStore.get('id')?.value ?? '1';

  async function action(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    cookies().set('id', id);

    revalidateTag('todos');
  }

  return (
    <div>
      <h1>Todo</h1>
      <form action={action}>
        <select name='id'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
        </select>
        <button type='submit'>submit</button>
      </form>
      <ServerTodo id={id} />
    </div>
  );
}
