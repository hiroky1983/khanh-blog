import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { Header } from "../../components/layout/Header";

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
  blog: Blog;
};

export const Blog: NextPage<Props> = ({ blog }) => {
  return (
    <div key={blog.id} className="h-4/5">
      <h1 className="py-2">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blog", contentId: id as string });
  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;
