import { GetStaticProps } from "next";
import { VStack, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Gear } from "@/types/gear";
import GearCard from "@/components/gear-card";
import { readData } from "@/utils/read-data";

type Props = {
  gear: { [key: string]: Gear[] };
  categories: string[];
};

const GearPage = ({ gear, categories }: Props) => {
  return (
    <>
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading size="md">Gear.</Heading>
        <Text>
          Productivity is directly associated with selecting the right software and hardware. 
          Here is a list of all the gear I use on a day-to-day basis.
          There are links but <strong> not affiliate links</strong>.
        </Text>
      </VStack>
      <List alignItems="stretch" w="full" spacing={12}>
        {categories.map((category) => (
          <ListItem key={category} alignItems="flex-start" spacing={8}>
            <Heading textTransform="capitalize" size="md">
              {category}.
            </Heading>
            <List alignItems="stretch" w="full">
              {gear[category].map((gear) => (
                <ListItem key={gear.url}>
                  <GearCard {...gear} />
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { gear: gearData } = await readData<{ gear: Gear[] }>("data/gear.json");

  const gear: { [key: string]: Gear[] } = {};

  gearData.forEach((tool) => {
    if (!gear[tool.category]) {
      gear[tool.category] = [];
    }
    gear[tool.category] = [...gear[tool.category], tool];
  });

  const categories = Object.keys(gear);

  const props: Props = { gear, categories };

  return {
    props,
  };
};

export default GearPage;
