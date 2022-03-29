import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../../libs/client";
import { ListCard } from "../components/ui/ListCard";
import { UserCard } from "../components/ui/UserCard";
import { Blog, Profile } from "../type/type";

type Props = {
  blog: Blog[];
  profile: Profile;
};

const Home: NextPage<Props> = ({ blog, profile }) => {
  return (
    <>
      <div className="flex py-6">
        <ul className="grid flex-grow justify-center gap-2 pt-16">
          {blog.map(({ id, title, eyeCatchImage, createdAt }) => (
            <>
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <a>
                    <ListCard
                      title={title}
                      eyeCatchImage={eyeCatchImage}
                      createdAt={createdAt}
                    />
                  </a>
                </Link>
              </li>
            </>
          ))}
        </ul>
        <div className="relative">
          <UserCard
            name={profile.name}
            avater={profile.avater}
            discription={profile.discription}
          />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
