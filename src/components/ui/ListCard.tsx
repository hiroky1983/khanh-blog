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
      className="bg-white flex h-32 hover:-translate-y-1 hover:shadow-xl"
      radius="md"
    >
      <Card.Section className="flex justify-center p-0">
        <Image src={eyeCatchImage?.url} width={250} />
        <Card.Section className="flex flex-col justify-center px-6">
          <Text size="lg" className="p-8">
            {title}
          </Text>

          <Card.Section className="flex">
            {tag && <Badge color="teal">{tag}</Badge>}
            <Text size="xs" className="absolute bottom-2 right-4">
              {day}
            </Text>
          </Card.Section>
        </Card.Section>
      </Card.Section>
    </Card>
  );
};
