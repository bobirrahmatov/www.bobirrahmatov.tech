 import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

import {
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  TWITTER_PROFILE,
} from "src/constants";
import { Link as LinkType } from "@/types/link";
import ExternalLink from "../external-link";
import HeroImage from "../hero-image";

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: TWITTER_PROFILE,
    label: "Twitter",
    color: "twitter",
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
  },
  {
    href: INSTAGRAM_PROFILE,
    label: "Instagram",
    color: "purple.500",
  },
];

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: "column-reverse", md: "row" }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          direction={{ base: "column", md: "row" }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            Hi, I’m Bob.
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
          I’m a <strong>full-stack developer</strong> (self-taught) 🚀, I’m still figuring out
          what my life would look like here, but for now, I’m happy to share I’m
          a curious learner of all things. I build stuff and also love{" "}
          <ExternalLink href="https://bitcoin.org/bitcoin.pdf">
            Bitcoin
          </ExternalLink>{" "}
          <Image
            src="/assets/images/bitcoin.png"
            width={24}
            height={24}
            alt="Bitcoin logo"
          />
          {", "}
          <ExternalLink href="https://ethereum.org/en/">
          Ethereum
          </ExternalLink>{""}
          <Image
            src="/assets/images/eth.png"
            width={24}
            height={24}
            alt="ETH logo"
          />
          {", and "} 
          <ExternalLink href="https://ripple.com/">
          Ripple 
          </ExternalLink>{" "}
          <Image
            src="/assets/images/xrp.png"
            width={24}
            height={24}
            alt="Ripple logo"
          />
            {". "} Here, I am trying to learn <strong>new technologies</strong> and share my
            experiences and knowledge.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: "flex-start", md: "center" }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
