import { Card, Text, useMantineTheme, Avatar } from "@mantine/core";
import { VFC } from "react";
import { Profile } from "../../type/type";
import { BrandTiktok, BrandFacebook } from "tabler-icons-react";
import Link from "next/link";

export const UserCard: VFC<Profile> = (props) => {
  const { name, avater, discription, facebookLink, tiktokLink } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div className="w-60 p-auto lg:fixed lg:top-44 lg:right-8">
      <Card shadow="sm" p="lg">
        <Card.Section className="flex items-center p-4">
          <Avatar radius="xl" size={80} src={avater.url} />
          <Text size="lg" className="ml-4">
            {name}
          </Text>
        </Card.Section>
        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {discription}
        </Text>
        <Card.Section className="flex items-center p-4 gap-2">
          {tiktokLink && (
            <Link href={tiktokLink}>
              <a target="_blank">
                <BrandTiktok size={30} strokeWidth={2} />
              </a>
            </Link>
          )}
          {facebookLink && (
            <Link href={facebookLink}>
              <a target="_blank">
                <BrandFacebook size={30} strokeWidth={2} />
              </a>
            </Link>
          )}
        </Card.Section>
      </Card>
    </div>
  );
};
