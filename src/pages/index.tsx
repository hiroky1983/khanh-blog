import { NextPage } from "next";
import { Header } from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
