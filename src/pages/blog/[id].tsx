import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import { ChevronLeft } from "tabler-icons-react";
import Link from "next/link";
import { Blog } from "../../type/type";
import { getToday } from "../../components/function/Date";
import { Calendar } from "tabler-icons-react";
import { Image } from "@mantine/core";

type Props = {
  blog: Blog;
};

export const BlogPage: NextPage<Props> = ({ blog }) => {
  const day = getToday(blog.createdAt).yearToDate;

  return (
    <div
      key={blog.id}
      className="bg-white rounded-lg shadow-md mx-auto lg:w-2/3 lg:p-12 p-6 h-full overflow-scroll"
    >
      <Link href="/">
        <a>
          <ChevronLeft />
        </a>
      </Link>
      <div className="mt-2">
        <Image src={blog.eyeCatchImage?.url} fit="cover" radius="sm" />
      </div>
      <h1 className="py-6 font-bold text-3xl">{blog.title}</h1>
      <p className="mb-4 flex text-gray-400">
        <Calendar />
        {day}
      </p>
      <article dangerouslySetInnerHTML={{ __html: blog.body }}></article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  const id = context.params?.id;
  const data: Blog = await client.get({
    endpoint: "blog",
    contentId: id,
  });
  return {
    props: {
      blog: data,
    },
  };
};

export default BlogPage;
