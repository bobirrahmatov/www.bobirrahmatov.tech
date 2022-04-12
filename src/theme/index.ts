import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const blueRing = (props) => ({
  _focus: {
    ringColor: mode('blue.300', 'blue.600')(props),
    ring: 3,
  },
});

const inputBorder = (props) => ({
  _focus: {
    borderColor: mode('blue.300', 'blue.600')(props),
  },
});

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        fontFeatureSettings: '"ss02"',
      },
    },
  },
  sizes: {
    18: '4.5rem',
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode('gray.900', 'white')(props),
        letterSpacing: '1px',
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('gray.900', 'white')(props),
      }),
    },
    Link: {
      baseStyle: (props) => ({
        ...blueRing(props),
      }),
    },
    Button: {
      baseStyle: (props) => ({
        ...blueRing(props),
      }),
    },
    Input: {
      variants: {
        filled: (props) => ({
          field: {
            ...inputBorder(props),
          },
        }),
      },
    },
    Textarea: {
      variants: {
        filled: (props) => ({
          ...inputBorder(props),
        }),
      },
    },
  },
  colors: {
    twitter: '#1EA1F1',
  },
  fonts: {
    heading: `Cal Sans, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
  mdx: {
    h1: {
      fontSize: '3xl',
      letterSpacing: '1px',
    },
    h2: {
      fontSize: 'xl',
      letterSpacing: '0.8px',
    },
    h3: {
      fontSize: 'md',
      letterSpacing: '0.6px',
    },
    h4: {
      fontSize: 'xs',
      letterSpacing: '0.5px',
    },
  },
});

export default theme;
