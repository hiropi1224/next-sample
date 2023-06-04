export default function WithoutFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='mt-6 text-center'>
      <h1>Footerなし</h1>
      {children}
    </main>
  );
}
