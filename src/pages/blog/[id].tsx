import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { ChevronLeft } from "tabler-icons-react";
import Link from "next/link";

type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eyeCatchImage?: {
    url: string;
    height: number;
    width: number;
  };
};

type Props = {
  blog: Blog;
};

export const Blog: NextPage<Props> = ({ blog }) => {
  return (
    <div key={blog.id}>
      <Link href="/">
        <a>
          <ChevronLeft />
        </a>
      </Link>
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
