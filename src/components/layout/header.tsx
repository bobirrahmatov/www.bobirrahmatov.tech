import {
  HStack,
  Heading,
  IconButton,
  Link,
  Spacer,
  Tooltip,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import { CmdPaletteContext } from "src/providers/cmd-palette-provider";
import ThemeToggle from "./toggletheme";

const Header = () => {
  const { open: openCommandPalette } = useContext(CmdPaletteContext);
  const [shortcut, setShortcut] = useState<string>();

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf("Mac OS X") != -1 ? "Cmd + K for Mac OS" : "Ctrl + K for Windows"
    );
  }, [setShortcut]);

  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      mb={16}
      py={3}
      bg={useColorModeValue("white", "gray.800")}
      insetX={0}
      transitionDuration="normal"
      transitionProperty="background"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        d="flex"
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <NextLink 
          href="/" 
          passHref>
          <Link>
            <Heading size="sm">Bobir Rahmatov.</Heading>
          </Link>
        </NextLink>
         <Spacer />
          <ThemeToggle />
          <HStack 
            alignItems="center" 
            spacing={{ base: 0, md: 4 }}
          >
          <Tooltip label={`Menu Palette (${shortcut})`}>
            <IconButton
              aria-label="Menu Palette"
              icon={<FiMenu />}
              onClick={openCommandPalette}
              size="sm"
              variant="ghost"
            />
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  );
};
export default Header;
