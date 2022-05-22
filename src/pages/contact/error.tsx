import { Image } from "@mantine/core";
import { NextPage } from "next";

import Link from "next/link";

export const error: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-green-700">Error!</h2>
      <Image src="/error.svg" alt="error" />
      <p>エラーが発生しました。最初からやり直してください。</p>
      <Link href="/">
        <a className="text-blue-500 underline">Homeにもどる</a>
      </Link>
    </div>
  );
};

export default error;
