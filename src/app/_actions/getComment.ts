import { zComments } from '@/app/_type/comment';

export const comment = {
  getComment: async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      {
        next: { revalidate: 60 },
      }
    );
    const data = await res.json();
    const comments = zComments.parse(data);

    return comments;
  },
};
