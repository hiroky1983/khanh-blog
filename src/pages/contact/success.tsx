import { NextPage } from "next";
import Link from "next/link";

export const success: NextPage = () => {
  return (
    <div>
      <h1>Success</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default success;
