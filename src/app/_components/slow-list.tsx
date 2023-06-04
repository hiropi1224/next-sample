import { useEffect } from 'react';

export async function SlowList({ text }: { text: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== '') {
        // API呼び出し処理
        alert(`call API:${text}`);
      }
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, [text]);

  return <p>{`input:${text}`}</p>;
}
