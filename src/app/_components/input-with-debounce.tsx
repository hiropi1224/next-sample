'use client';
import React, { FC, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/app/_components/input';
import { sleep } from '@/app/_utils/sleep';

const sleepTime = 2000;

export const InputWithDebounce: FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => {
      await sleep(sleepTime);
      if (e.target.value === '') {
        router.push(`/form`);
      } else {
        router.push(`/form?q=${e.target.value}`);
      }
    });
  };

  return (
    <div>
      <div className='flex w-1/3'>
        <Input onChange={handleChange} />
        <div className='mx-2 flex justify-center items-center'>
          {isPending ? (
            <div className='h-8 w-8 rounded-full border-4 border-t-indigo-500/100 relative animate-spin' />
          ) : null}
        </div>
      </div>
    </div>
  );
};
