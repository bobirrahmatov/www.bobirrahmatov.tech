import {
  Box,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<FiMoon />, <FiSun />);

  return (
    <Box>
      <Tooltip label="Toggle Theme">
        <IconButton
          aria-label="Toggle Theme"
          icon={toggleIcon}
          onClick={toggleColorMode}
          size="sm"
          variant="ghost"
        />
      </Tooltip>
    </Box>
  );
};

export default ThemeToggle;