import { Image } from "@mantine/core";
import { NextPage } from "next";

import Link from "next/link";

export const error: NextPage = () => {
  return (
    <div>
      <h1>error</h1>

      <Image src="/error.svg" alt="error" width={300} height={300} />

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default error;
