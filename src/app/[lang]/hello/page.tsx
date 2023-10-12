import { getDictionaries } from '@/dictionaries';

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionaries(params.lang);

  return (
    <>
      <h2>{dict.hello.title}</h2>
      <p>{dict.hello.text}</p>
    </>
  );
}
