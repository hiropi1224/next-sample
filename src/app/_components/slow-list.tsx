'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export function SlowList({ text }: { text: string }) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== '') {
        // API呼び出し処理
        router.replace(`/form?params=${text}`);
        alert(`api called: ${text}`);
      }
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, [router, text]);

  return <p>{`input:${text}`}</p>;
}
