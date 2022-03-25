import { GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import { Header } from "../components/layout/Header";

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

export const Blog: NextPage<Props> = ({ blog }) => {
  console.log(blog);

  return (
    <div className="min-h-screen">
      <main>
        <Header />
        {blog.map(({ id, title, body }) => (
          <div key={id} className=" justify-center bg-gray-300">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
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

export default Blog;
