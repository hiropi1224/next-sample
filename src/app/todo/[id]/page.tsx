import { Suspense } from 'react';
import { comment } from '@/app/_actions/getComment';
import { Await } from '@/app/_components/await';

export default async function Comment({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>Comment</h1>
      <Suspense key='comment' fallback={<Skeleton />}>
        <Await promise={comment.getComment(id)}>
          {(comments) => (
            <div className='flex flex-col gap-2'>
              {comments.map((comment) => (
                <div key={comment.id} className='border-b-2 p-2'>
                  <p>{`id:${comment.id}`}</p>
                  <p>{`userId:${comment.email}`}</p>
                  <p>{`title:${comment.body}`}</p>
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

const Skeleton = () => (
  <div className='border-b-2'>
    <div className='animate-pulse flex space-x-4'>
      <div className='flex-1 space-y-2 py-2'>
        <div className='h-4 bg-slate-200 rounded'></div>
        <div className='h-4 bg-slate-200 rounded'></div>
        <div className='h-4 bg-slate-200 rounded'></div>
      </div>
    </div>
  </div>
);
