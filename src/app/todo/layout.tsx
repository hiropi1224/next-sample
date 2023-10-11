import { Suspense } from 'react';
import Link from 'next/link';
import { todo } from '@/app/_actions/getTodo';
import { Await } from '@/app/_components/await';
import Loading from '@/app/todo/loading';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Await promise={todo.getTodos()}>
          {(stories) => (
            <div className='grid grid-cols-3 gap-4'>
              {stories.map(
                (story, idx) =>
                  idx < 6 && (
                    <Link
                      href={`/todo/${story.id}`}
                      key={story.id}
                      className='border rounded-md p-4 hover:bg-slate-200'
                    >
                      <p>{`id:${story.id}`}</p>
                      <p>{`userId:${story.userId}`}</p>
                      <p>{`title:${story.title}`}</p>
                    </Link>
                  )
              )}
            </div>
          )}
        </Await>
      </Suspense>
      {children}
    </main>
  );
}
