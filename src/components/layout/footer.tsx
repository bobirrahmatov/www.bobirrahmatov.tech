import { Link, Flex, IconButton, useColorMode, Box } from "@chakra-ui/react";
import {
  FiInstagram,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiCoffee,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
  LINKEDIN_PROFILE,
  EMAIL,
  INSTAGRAM_PROFILE,
  BUYMECOFFEE_PROFILE,
} from "../../constants";

const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "undefined",
    dark: "undefined",
  };
  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };
  const linkColor = {
    light: "black",
    dark: "white",
  };
  return (
    <Box
      as='footer'
      alignItems='center'
      mt={2}
      pb={2}
      color={linkColor[colorMode]}
    >
      <Flex 
        align='center' 
        justify='center'
        direction='column'
        w='100%'
        my={2}
        spacing={{ base: 2, md: 8 }}
        >
        <div>
          <Link href={INSTAGRAM_PROFILE} isExternal title="Instagram">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="Instagram"
              icon={<FiInstagram />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={TWITTER_PROFILE} isExternal title="Twitter">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={GITHUB_PROFILE} isExternal title="GitHub">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={LINKEDIN_PROFILE} isExternal title="LinkedIn">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={BUYMECOFFEE_PROFILE} isExternal title="Buy me a coffee">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="Coffee"
              icon={<FiCoffee />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={EMAIL} isExternal title="Email">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="Say hello"
              icon={<FiMail />}
              size="lg"
              variant="ghost"
            />
          </Link>
          <Link href={YOUTUBE_CHANNEL} isExternal title="YouTube">
            <IconButton
              color={borderIcon[colorMode]}
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              aria-label="YouTube"
              icon={<FiYoutube />}
              size="lg"
              variant="ghost"
            />
          </Link>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
