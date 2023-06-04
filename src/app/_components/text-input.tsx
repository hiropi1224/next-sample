'use client';
import React, { FC, useEffect, useState, useTransition } from 'react';
import { sleep } from '@/app/_utils/sleep';

const sleepTime = 1000;

export const TextInput: FC = () => {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== '') {
        // API呼び出し処理
        alert(`call API:${text}`);
      }
    }, sleepTime);

    // cleanup
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <div className='flex w-1/3'>
        <input
          className='w-full flex-1 inline-flex items-center justify-center rounded py-2 text-base shadow-sm focus:shadow'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            startTransition(async () => {
              await sleep(sleepTime);
            });
          }}
        />
        <div>{isPending ? <>...loading</> : <></>}</div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
