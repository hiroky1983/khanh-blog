import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Avatar,
} from "@mantine/core";

export const UserCard = () => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div className="w-60 p-auto">
      <Card shadow="sm" p="lg">
        <Card.Section className="flex items-center p-4">
          <Avatar radius="xl" size={80} />
          <Text size="lg" className="ml-4">
            kan
          </Text>
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>私は〇〇です</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Book classic tour now
        </Button>
      </Card>
    </div>
  );
};
