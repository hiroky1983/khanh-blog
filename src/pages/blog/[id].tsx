import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { ChevronLeft } from "tabler-icons-react";
import Link from "next/link";
import { Blog } from "../../type/type";

type Props = {
  blog: Blog;
};

export const BlogPage: NextPage<Props> = ({ blog }) => {
  return (
    <div key={blog.id} className="bg-white mx-auto w-1/3 p-4">
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
  const data: Blog = await client.get({
    endpoint: "blog",
    contentId: id as string,
  });
  return {
    props: {
      blog: data,
    },
  };
};

export default BlogPage;
