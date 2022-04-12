import { useState } from "react";
import { GetStaticProps } from "next";
import {
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import { Project } from "@/types/personal-projects";
import ProjectCard from "@/components/project-card";
import { fetchProjects } from "@/utils/get-project";

type Props = {
  projects: Project[];
  tags: string[];
};

const ProjectsPage = ({ projects, tags }: Props) => {
  const [displayProjects, setDisplayProjects] = useState(projects);
  const [selectedTag, setSelectedTag] = useState<string>();
  const filterProjects = (tag?: string) => {
    if (tag) {
      setDisplayProjects(projects.filter(({ tags }) => tags.includes(tag)));
    } else {
      setDisplayProjects(projects);
    }
    setSelectedTag(tag);
  };

  return (
    <VStack w="full" spacing={8}>
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading size="md">Projects.</Heading>
        <Text>
          I am always working on new projects, you can find them below or on my GitHub.
        </Text>
      </VStack>
      <HStack as="section" flexWrap="wrap" gridRowGap={2} w="full" spacing={3}>
        <Button
          textTransform="uppercase"
          colorScheme="blue"
          onClick={() => filterProjects()}
          size="xs"
          variant={!selectedTag ? "solid" : "ghost"}
        >
          View all
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            textTransform="uppercase"
            colorScheme="blue"
            onClick={() => filterProjects(tag)}
            size="xs"
            variant={selectedTag === tag ? "solid" : "ghost"}
          >
            {tag}
          </Button>
        ))}
      </HStack>
      <SimpleGrid
        as="section"
        alignItems="stretch"
        gap={12}
        w="full"
        columns={{ base: 1, sm: 2, md: 3 }}
      >
        {displayProjects.map(({ cover, link, title, tags }) => (
          <ProjectCard
            key={link}
            title={title}
            cover={cover}
            link={link}
            tags={tags}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await fetchProjects();

  const tags = Array.from(new Set(projects.flatMap(({ tags }) => tags)));

  const props: Props = { projects, tags };

  return {
    props,
    revalidate: 60 * 60,
  };
};

export default ProjectsPage;
