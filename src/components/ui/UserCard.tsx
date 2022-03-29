import { Card, Text, useMantineTheme, Avatar } from "@mantine/core";
import { VFC } from "react";
import { Profile } from "../../type/type";

export const UserCard: VFC<Profile> = (props) => {
  const { name, avater, discription } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div className="w-60 p-auto fixed top-24 right-4">
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
      </Card>
    </div>
  );
};
