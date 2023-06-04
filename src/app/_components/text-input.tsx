'use client';
import React, { FC, useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/app/_components/input';
import { sleep } from '@/app/_utils/sleep';

const sleepTime = 1000;

export const TextInput: FC = () => {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== '') {
        // API呼び出し処理
        router.replace(`/form?params=${text}`);
        alert(`api called: ${text}`);
      } else {
        router.replace(`/form`);
      }
    }, sleepTime);

    // cleanup
    return () => clearTimeout(timer);
  }, [router, text]);

  return (
    <div>
      <div className='flex w-1/3'>
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            startTransition(async () => {
              await sleep(sleepTime);
            });
          }}
        />
        <div className='mx-2 flex justify-center items-center'>
          {isPending ? (
            <div className='h-8 w-8 rounded-full border-4 border-t-indigo-500/100 relative animate-spin' />
          ) : null}
        </div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
