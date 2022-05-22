// import { Image } from "@mantine/core";
import { NextPage } from "next";
import Image from "next/image";

import Link from "next/link";

export const error: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>エラー</h2>
      <Image src="/error.svg" alt="error" width={300} height={300} />
      <p>エラーが発生しました。最初からやり直してください。</p>
      <Link href="/">
        <a className="text-blue-500 underline">Homeにもどる</a>
      </Link>
    </div>
  );
};

export default error;
