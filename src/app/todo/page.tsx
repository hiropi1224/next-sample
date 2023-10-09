import { Suspense } from 'react';
import { todo } from '@/app/_actions/getTodo';
import { Await } from '@/app/_components/await';
import Loading from '@/app/todo/loading';

export default async function Todo() {
  return (
    <div>
      <h1>Todos</h1>
      <Suspense fallback={<Loading />}>
        <Await promise={todo.getTodos()}>
          {(stories) => (
            <div>
              {stories.map((story) => (
                <div key={story.id} className='border-b-2'>
                  <p>{`id:${story.id}`}</p>
                  <p>{`userId:${story.userId}`}</p>
                  <p>{`title:${story.title}`}</p>
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
