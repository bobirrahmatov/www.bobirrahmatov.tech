import { Flex, Icon, FlexProps } from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";
import { IconType } from "react-icons";
import { BsBookmarkHeartFill, BsBookmarkCheckFill } from "react-icons/bs";
import { BiGlasses } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";

import { BookState } from "@/types/book";

type Props = FlexProps & {
  state: BookState;
};

const Tag = ({ state, ...flexProps }: Props) => {
  let tagProps: {
    color?: ThemeTypings["colors"];
    icon?: IconType;
  } = {};

  switch (state) {
    case "Favorite":
      tagProps = {
        color: "red.500",
        icon: BsBookmarkHeartFill,
      };
      break;
    case "Reading":
      tagProps = {
        color: "blue.500",
        icon: BiGlasses,
      };
      break;
    case "Wish":
      tagProps = {
        color: "orange.500",
        icon: FaCartArrowDown,
      };
      break;
    case "Completed":
      tagProps = {
        color: "green.500",
        icon: BsBookmarkCheckFill,
      };
      break;
    default:
      break;
  }

  if (state === "") return <></>;

  return (
    <Flex
      align="center"
      justify="center"
      w={5}
      h={5}
      bg={tagProps.color}
      rounded="full"
      {...flexProps}
    >
      <Icon as={tagProps.icon} boxSize={3} color="white" />
    </Flex>
  );
};
export default Tag;
