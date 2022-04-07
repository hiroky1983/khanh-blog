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
        <Image src={eyeCatchImage?.url} width={250} fit="cover" />
        <Card.Section>
          <Text size="lg" className="pt-2 pr-8 pl-2">
            {title}
          </Text>

          <Card.Section className="flex px-2">
            {tag && (
              <Badge color="teal" className="px-2">
                {tag}
              </Badge>
            )}
            <Text size="xs" className="px-2">
              {day}
            </Text>
          </Card.Section>
        </Card.Section>
      </Card.Section>
    </Card>
  );
};
