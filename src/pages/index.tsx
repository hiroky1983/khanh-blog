import { GetStaticProps, NextPage } from "next";
import { Header } from "../components/layout/Header";
import Link from "next/link";
import { client } from "../../libs/client";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
};

type Props = {
  blog: Blog[];
};

const Home: NextPage<Props> = ({ blog }) => {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        {blog.map(({ id, title }) => (
          <ul key={id}>
            <li>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          </ul>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home;
