import { Card, Text, Image, Group } from "@mantine/core";
import { VFC } from "react";
import { getToday } from "../function/Date";
import { Badge } from "@mantine/core";

type Props = {
  title: string;
  eyeCatchImage?: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  tag: string;
};

export const ListCard: VFC<Props> = (props) => {
  const { title, eyeCatchImage, createdAt, tag } = props;
  const day = getToday(createdAt).yearToMin;

  return (
    <Card
      shadow="lg"
      p="sm"
      className="bg-white hover:-translate-y-1 hover:shadow-xl p-0 lg:flex"
      radius="md"
    >
      <Card.Section>
        <Image
          src={eyeCatchImage?.url}
          fit="cover"
          className="lg:w-[250px] w-full"
          height={160}
          withPlaceholder
        />
      </Card.Section>
      <Group className="p-6 grid gap-4 lg:gap-6">
        <Card.Section className="flex flex-col">
          <Text size="lg">{title}</Text>

          {tag && (
            <Badge color="teal" className="max-w-min">
              {tag}
            </Badge>
          )}
          <Text size="xs">{day}</Text>
        </Card.Section>
      </Group>
    </Card>
  );
};
