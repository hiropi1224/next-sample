'use client';
import { useState, useDeferredValue, FC, Suspense } from 'react';
import { Input } from '@/app/_components/input';
import { SlowList } from '@/app/_components/slow-list';

export const InputWithDeferred: FC = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <>
      <label>
        input-with-deferred
        <Input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <Suspense
        fallback={
          <div className='h-8 w-8 rounded-full border-4 border-t-indigo-500/100 relative animate-spin' />
        }
      >
        <SlowList text={deferredText} />
      </Suspense>
    </>
  );
};
