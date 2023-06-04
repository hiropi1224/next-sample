'use client';
import { useState, useDeferredValue, FC, Suspense } from 'react';
import { SlowList } from '@/app/_components/slow-list';

export const InputWithDeferred: FC = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <>
      <label>
        input-with-deferred
        <input
          className='w-full flex-1 inline-flex items-center justify-center rounded py-2 text-base shadow-sm focus:shadow'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <Suspense fallback={<>...loading</>}>
        <SlowList text={deferredText} />
      </Suspense>
    </>
  );
};
