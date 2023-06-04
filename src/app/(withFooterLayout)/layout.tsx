import { Footer } from '@/app/_components/footer';

export default function WithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='mt-6 text-center'>
      <h1>Footerありページ</h1>
      {children}
      <Footer />
    </main>
  );
}
