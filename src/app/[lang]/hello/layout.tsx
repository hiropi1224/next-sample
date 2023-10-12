import Link from 'next/link';

export const metadata = {
  title: 'i18n対応',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='flex justify-center gap-2'>
        <Link href={`/ja/hello`} className='w-40 text-center'>
          Ja
        </Link>
        <Link href={`/en/hello`} className='w-40 text-center'>
          En
        </Link>
      </div>
      {children}
    </main>
  );
}
