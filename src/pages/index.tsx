import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../../libs/client";
import { ListCard } from "../components/ui/ListCard";
import { UserCard } from "../components/ui/UserCard";
import { Blog, Profile } from "../type/type";
import { Month } from "@mantine/dates";
import { SearchSecction } from "../components/ui/SearchSecction";
import { useState } from "react";

type Props = {
  blog: Blog[];
  profile: Profile;
};

const Home: NextPage<Props> = ({ blog, profile }) => {
  // const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="lg:flex mx-4">
        <ul className="grid lg:flex-grow lg:justify-center gap-3 pt-16">
          {/* <SearchSecction /> */}
          {blog.map(({ id, title, eyeCatchImage, createdAt, tag }) => (
            <>
              <li key={id} className={`lg:w-[499px]`}>
                <Link href={`/blog/${id}`}>
                  <a>
                    <ListCard
                      title={title}
                      eyeCatchImage={eyeCatchImage}
                      createdAt={createdAt}
                      tag={tag}
                    />
                  </a>
                </Link>
              </li>
            </>
          ))}
        </ul>
        <div className="hidden lg:relative lg:block">
          <UserCard
            name={profile.name}
            avater={profile.avater}
            discription={profile.discription}
            facebookLink={profile.facebookLink}
            tiktokLink={profile.tiktokLink}
          />

          {/* <Month
            size="xs"
            month={date}
            value={date}
            onChange={setDate}
            className="lg:fixed lg:bottom-60 lg:right-8"
          /> */}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: "blog" });
  const myData: Profile = await client.get({ endpoint: "profile" });
  const blog: Blog[] = data.contents;
  return {
    props: {
      blog,
      profile: myData,
    },
  };
};

export default Home;
