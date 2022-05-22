import { Image } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

export const success: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-green-700">Success!</h2>
      <Image src="/success.svg" alt="success" />
      <p>送信に成功しました。</p>
      <Link href="/">
        <a className="text-blue-500 underline">Homeにもどる</a>
      </Link>
    </div>
  );
};

export default success;
