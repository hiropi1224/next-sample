import Link from 'next/link';
import { tv } from 'tailwind-variants';

const footer = tv({
  slots: {
    base: 'bg-slate-50 opacity-80 fixed bottom-[0vh] w-full py-2',
    nav: 'gap-6 mx-4 flex justify-around fix',
    navItem: 'text-lg font-semibold text-gray-600 transition duration-100',
    area: 'flex flex-col items-center text-sm',
    icon: 'h-6 w-6',
  },
});

const { base, nav, navItem, area } = footer();

export const Footer: React.FC = () => {
  return (
    <footer className={base()}>
      <nav className={nav()}>
        <Link href='/' className={navItem()}>
          <div className={area()}>検索</div>
        </Link>
        <Link href='/' className={navItem()}>
          <div className={area()}>お気に入り</div>
        </Link>
        <Link href='/' className={navItem()}>
          <div className={area()}>お買い物</div>
        </Link>
      </nav>
    </footer>
  );
};
