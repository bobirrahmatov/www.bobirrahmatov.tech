import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";

const TechCard = ({ techs }) => {
  return (
    <LinkBox as="article">
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Box
          d="flex"
          w="100%"
          p={4}
          borderWidth="1px"
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius={5}
          _hover={{ borderColor: "blue.500" }}
          cursor="pointer"
          role="group"
        >
          <IconButton
            as="a"
            mr={3}
            _groupHover={{ color: "blue.500" }}
            aria-label={techs?.name}
            href={techs?.url}
            icon={techs?.icon}
            target="_blank"
          />
          <Box>
            <LinkOverlay href={techs?.url} isExternal >
              <Heading size="sm">{techs?.name}</Heading>
              <Text color="gray.500" fontSize="sm">
                {techs?.description}
              </Text>
            </LinkOverlay>
          </Box>
        </Box>
      </VStack>
    </LinkBox>
  );
};

export default TechCard;
