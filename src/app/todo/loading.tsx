export default function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
      <div className='mx-4 h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
      <div className='h-2 w-2 animate-ping rounded-full bg-pink-600'></div>
    </div>
  );
}
