import TechCard from "@/components/tech-stack";
import { Heading, SlideFade, Grid, Text, VStack } from "@chakra-ui/react";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiChakraui, 
  SiNextdotjs, 
  SiVercel,
  SiSequelize,
  SiMongodb,
} from 'react-icons/si';

const techstacks = [
  {
    name: "Node.js",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "Javascript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces and applications.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "SQL & MongoDb",
    description: "Both database are great, and they have their use cases.",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://github.com/",
  },
  {
    name: "CSS Framework",
    description: "I use Chakra UI to make beautiful UI out of the box.",
    icon: <SiChakraui fontSize="20px" />,
    url: "https://chakra-ui.com/",
  },
  {
    name: "Next mdx-remote",
    description: "I use next-mdx-remote for my blog. Posts are stored in mdx files.",
    icon: <SiNextdotjs fontSize="20px" />,
    url: "https://github.com/hashicorp/next-mdx-remote",
  },
  {
    name: "Vercel",
    description: "Vercel is free, fast, integrates with GitHub, and a great experience.",
    icon: <SiVercel fontSize="20px" />,
    url: "https://vercel.com/",
  },
  {
    name: ".tech domain",
    description: "My domain name is bought and stored through Vercel Domains.",
    icon: <SiSequelize fontSize="20px" />,
    url: "https://vercel.com/docs/concepts/projects/custom-domains/",
  },
];

const TechStackSection = () => {
  return (
    <VStack alignItems="flex-start" w="full" spacing={3}>
      <SlideFade delay={0.2} in={true} offsetY={80}>
        <Heading size="md">
          Tech stack.
        </Heading>
         <Text>
          Each piece of technology used in this website is below. I believe this
          is one of the best stacks there is to build websites of any size and
          domain.
        </Text>
        <Grid
          gap={3}
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          mt={3}
        >
          {techstacks.map((techstack) => (
            <TechCard techs={techstack} key={techstack?.name} />
          ))}
        </Grid>
      </SlideFade>
    </VStack>
  );
};

export default TechStackSection;
