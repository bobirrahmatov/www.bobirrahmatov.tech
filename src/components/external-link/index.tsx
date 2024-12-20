import {
  Link,
  LinkProps,
  Icon,
  HStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        alignItems="center"
        d="inline-flex"
        color={mode("blue.500", "blue.300")}
        isExternal
        target="_blank"
      >
        {children}
      </Link>
      <Icon as={FiArrowUpRight} d="inline" color={mode("gray.700", "white")} />
    </span>
  );
};

export default ExternalLink;
