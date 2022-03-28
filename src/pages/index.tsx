import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../../libs/client";
import { UserCard } from "../components/ui/UserCard";

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
    <>
      <div className="flex justify-around py-6">
        {blog.map(({ id, title }) => (
          <ul key={id} className="grid grid-flow-row">
            <li>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          </ul>
        ))}
        <UserCard />
      </div>
    </>
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
