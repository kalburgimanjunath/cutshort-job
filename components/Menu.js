import Link from 'next/link';
export default function Menu({ menus }) {
  return (
    <div className="flex">
      {menus &&
        menus.map((item) => {
          return (
            <div className="p-3 bg-pink-300 text-black hover:bg-pink-100 cursor-pointer">
              <Link href={`${item.link}`}>{item.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
