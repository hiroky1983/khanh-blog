import { Select } from "@mantine/core";

export const Header = () => {
  return (
    <header className="flex bg-green-500 text-white w-screen py-4 px-8">
      <h1 className="flex flex-grow font-bold text-xl">Blog</h1>
      {/* <nav>
        <ul className="flex gap-2">
          <li>
            <Select
              placeholder="言語設定"
              data={[
                { value: "日本語", label: "日本語", lang: "ja" },
                { value: "ベトナム語", label: "viet-nam", lang: "vi" },
              ]}
            />
          </li>
        </ul>
      </nav> */}
    </header>
  );
};
