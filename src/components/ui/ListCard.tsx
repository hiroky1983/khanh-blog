import { Card, Text, Image } from "@mantine/core";
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
      className="bg-white flex hover:-translate-y-1 hover:shadow-xl p-0 lg:h-32"
      radius="md"
    >
      <Card.Section className="flex">
        <Card.Section className="h-32">
          <Image src={eyeCatchImage?.url} width={250} />
        </Card.Section>
        <Card.Section className="p-8 grid gap-4 lg:gap-6">
          <Text size="lg">{title}</Text>

          <Card.Section className="flex flex-col">
            {tag && (
              <Badge color="teal" className="max-w-min">
                {tag}
              </Badge>
            )}
            <Text size="xs">{day}</Text>
          </Card.Section>
        </Card.Section>
      </Card.Section>
    </Card>
  );
};
