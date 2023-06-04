import { InputWithDeferred } from '@/app/_components/input-with-deferred';
import { TextInput } from '@/app/_components/text-input';

export default function Home() {
  return (
    <main>
      <div>
        <p>Hello, world!</p>
        <TextInput />
        <InputWithDeferred />
      </div>
    </main>
  );
}
