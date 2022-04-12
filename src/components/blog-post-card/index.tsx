import Link from "next/link";
import Image from "next/image";
import {
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { format } from "timeago.js";
import { BlogPost } from "@/types/blog-post";

const BlogPostCard = ({
  title,
  slug,
  date,
  readingTime,
  thumbnail,
}: BlogPost) => {
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <LinkBox as="article">
      <Stack
        alignItems="center"
        direction={{ base: "row", md: "row" }}
        p={4}
        _hover={{
          transform: "scale(1.025, 1.025)",
          backgroundColor: hoverBg,
        }}
        rounded="md"
        spacing={{ base: 8, md: 5 }}
        transitionDuration="slow"
        transitionProperty="transform"
        transitionTimingFunction="ease-out"
      >
        {isMobile ? null : (
          <Image src={thumbnail} alt="React logo" width={32} height={32} />
        )}
        <VStack alignItems="stretch" w="full">
          {isMobile ? (
            <VStack alignItems="flex-start" justifyContent="space-between">
              <Link href={`/blog/${slug}`} passHref>
                <LinkOverlay>
                  <Heading size="md">{title}</Heading>
                </LinkOverlay>
              </Link>
              <HStack
                justify="space-between"
                divider={
                  <Text mx={2} color="gray.500">
                    •
                  </Text>
                }
              >
                <Text color="gray.500" fontSize="sm">
                  {format(date)}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  {readingTime}
                </Text>
              </HStack>
            </VStack>
          ) : (
            <HStack justify="space-between">
              <Link href={`/blog/${slug}`} passHref>
                <LinkOverlay>
                  <Heading size="md">{title}</Heading>
                  <Text color="gray.500" fontSize="sm">
                    {readingTime}
                  </Text>
                </LinkOverlay>
              </Link>
              <Text color="gray.500" fontSize="sm">
                {format(date)}
              </Text>
            </HStack>
          )}
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default BlogPostCard;
