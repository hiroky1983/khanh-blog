import { NextPage } from "next";
import { Header } from "../components/layout/Header";
import Link from "next/link";

const Home: NextPage = () => {
  
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Link href={"/blog"} >
          <a>blog</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
