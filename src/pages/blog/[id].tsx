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
    <div key={blog.id} className="bg-white mx-auto w-2/3 p-12 h-full">
      <Link href="/">
        <a>
          <ChevronLeft />
        </a>
      </Link>
      <h1 className="py-6 font-bold text-3xl">{blog.title}</h1>
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
