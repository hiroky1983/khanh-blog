import { Image } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";

export const success: NextPage = () => {
  return (
    <div>
      <h1>Success</h1>
      <Image src="/success.svg" alt="success" width={300} height={300} />
      <Link href="/">
        <a className="text-blue-500 underline">Homeにもどる</a>
      </Link>
    </div>
  );
};

export default success;
