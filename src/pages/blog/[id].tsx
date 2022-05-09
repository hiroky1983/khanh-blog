import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import Link from "next/link";
import { Blog } from "../../type/type";
import { getToday } from "../../components/function/Date";
import { Calendar } from "tabler-icons-react";
import { Button, Image } from "@mantine/core";
import { useRouter } from "next/router";
import SnsButton from "../../components/ui/SnsButton";

type Props = {
  blog: Blog;
  blogList: Blog[];
};

export const BlogPage: NextPage<Props> = ({ blog, blogList }) => {
  const day = getToday(blog.createdAt).yearToDate;
  const router = useRouter();
  const index = blogList.findIndex((content) => content.id === blog.id);
  const prev = blogList[index - 1];
  const next = blogList[index + 1];
  const prevId = prev ? prev.id : undefined;
  const nextId = next ? next.id : undefined;
  const a = router.basePath;
  console.log(a);

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
      <div className="mt-4">
        <Image src={blog.eyeCatchImage?.url} fit="cover" radius="sm" />
      </div>
      <h1 className="py-6 font-bold text-3xl">{blog.title}</h1>
      <p className="mb-4 flex text-gray-400">
        <Calendar />
        {day}
      </p>
      <article
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></article>
      <div className="flex justify-between text-xl mt-20">
        <Button
          disabled={prevId === undefined}
          onClick={() => router.push(`/blog/${prevId}`)}
          className="bg-white hover:bg-gray-100 text-[#374151] text-lg"
        >
          <ChevronLeft />
          次のブログへ
        </Button>
        <Button
          disabled={nextId === undefined}
          onClick={() => router.push(`/blog/${nextId}`)}
          className="bg-white hover:bg-gray-100 text-[#374151] text-lg"
        >
          前のブログへ
          <ChevronRight />
        </Button>
      </div>
      <SnsButton url={`https://k-blog-nine.vercel.app//blog/${blog.id}`} />
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
  const blogList: { contents: Blog[] } = await client.get({
    endpoint: "blog",
    queries: { limit: 1000, fields: "id,title" },
  });

  return {
    props: {
      blog: data,
      blogList: blogList.contents,
    },
  };
};

export default BlogPage;
