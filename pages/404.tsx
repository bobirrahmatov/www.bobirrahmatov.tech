import {
  VStack,
  Stack,
  Icon,
  Button,
  Heading,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import NextLink from "next/link";

const NotFound = () => {
  return (
    <VStack w="full" spacing={12}>
      <VStack w="full" spacing={4}>
        <AspectRatio
          as="figure"
          flexShrink={0}
          overflow="hidden"
          w="full"
          shadow="xl"
          ratio={16 / 9}
          rounded="lg"
        >
          <video autoPlay loop muted playsInline>
            <source src={`/assets/videos/404.webm`} type="video/webm" />
            <source src={`/assets/videos/404.mp4`} type="video/mp4" />
          </video>
        </AspectRatio>
        <Heading> Oops! The doorway to the great nothing.</Heading>
        <Text>
          Sorry about that! Please visit the homepage to get where you need to
          go.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={3}>
          <NextLink href="/" passHref>
            <Button
              justifyContent={{ base: "flex-start", md: "center" }}
              px={4}
              href="/"
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="outline"
            >
              Take me home
            </Button>
          </NextLink>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default NotFound;
