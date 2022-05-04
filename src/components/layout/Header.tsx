import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-green-500 text-white w-screen py-4 px-8">
      <Link href="/">
        <a>
          <h1 className="flex flex-grow font-bold text-xl">Blog</h1>
        </a>
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href={"/contact"}>
              <a>お問い合わせ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
