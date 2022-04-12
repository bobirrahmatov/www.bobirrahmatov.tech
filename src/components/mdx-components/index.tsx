import {
  Alert,
  Box,
  chakra,
  Link,
  HTMLChakraProps,
  Kbd,
  useColorModeValue,
  useColorMode,
  Tooltip,
  IconButton,
  useClipboard,
  HStack,
} from '@chakra-ui/react';
import {
  SiReact,
  SiHtml5,
  SiCsswizardry,
  SiPrisma,
  SiTypescript,
  SiGraphql,
  SiMysql,
  SiMicrosoftaccess,
  SiTableau,
  SiPython,
  SiMicrosoftexcel,
  SiOracle,
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { IoTerminal } from 'react-icons/io5';
import { DiJsBadge } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { mode } from '@chakra-ui/theme-tools';
import NextImage from 'next/image';
import slugify from 'slugify';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import { BiCopy } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: (prop) =>
    ['Prism', 'theme', 'code', 'language', 'children'].includes(prop),
});

const Pre = (props) => <chakra.div my='2em' borderRadius='sm' {...props} />;

const Table = (props) => (
  <chakra.div overflowX='auto'>
    <chakra.table textAlign='left' mt='32px' width='full' {...props} />
  </chakra.div>
);

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
    fontWeight='semibold'
    p={2}
    fontSize='sm'
    {...props}
  />
);

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth='1px'
    borderColor='inherit'
    fontSize='sm'
    whiteSpace='normal'
    {...props}
  />
);

const CopyButton = ({ value } : { value : any }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  const copyIcon = useColorModeValue(<BiCopy />, <AiFillCheckCircle />);
  return (
    <Box>
    <Tooltip label="Copy">
      <IconButton
        aria-label="Copy"
        icon={copyIcon}
        onClick={onCopy}
        size="md"
        variant="ghost"
      />
    </Tooltip>
  </Box>
  );
};

const CodeHighlight = ({ children: codeString, className: language }: any) => {
  language = language.replace('language-', '');
  const showLanguage = () => {
    switch (language) {
      case 'typescript':
        return <SiTypescript size={24} color="#408ef5" />;
      case 'tsx':
        return <SiTypescript size={24} color="#408ef5" />;
      case 'ts':
        return <SiTypescript size={24} color="#408ef5" />;
      case 'javascript':
        return <DiJsBadge size={24} color="#f7df1e" />;
      case 'js':
        return <DiJsBadge size={24} color="#f7df1e" />;
      case 'bash':
        return <IoTerminal size={24} color="#57cc99" />;
      case 'git':
        return <FaGitAlt size={24} color="#57cc99" />;
      case 'shell':
        return <IoTerminal size={24} color="#57cc99" />;
      case 'diff':
        return <FaGitAlt size={24} color="#57cc99" />;
      case 'jsx':
        return <SiReact size={24} color="#61dafb" />;
      case 'html':
        return <SiHtml5 size={24} color="#ff9800" />;
      case 'css':
        return <SiCsswizardry size={24} color="#610094" />;
      case 'json':
        return <VscJson size={24} color="#e6ffed" />;
      case 'prisma':
        return <SiPrisma size={24} color="#57cc99" />;
      case 'graphql':
        return <SiGraphql size={24} color="#e10098" />;
      case 'sql':
        return <SiMysql size={24} color="#F29111" />;
      case 'msaccess':
        return <SiMicrosoftaccess size={24} color="#9e1827" />;
      case 'rpa':
        return <FaRobot size={24} color="#e95821" />;
      case 'tableau':
        return <SiTableau size={24} color="#23467d" />;
      case 'python':
        return <SiPython size={24} color="#4B8BBE" />;
      case 'py':
        return <SiPython size={24} color="#4B8BBE" />;
      case 'excel':
        return <SiMicrosoftexcel size={24} color="#1D6F42" />;
      case 'oracle':
        return <SiOracle size={24} color="#f80000" />;
      default:
        break;
    }
  };
  const theme = useColorModeValue(lightTheme, darkTheme);
  const lineNumberColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');
  const preBackground = useColorModeValue('gray.50', 'gray.900');
  const showLineNumbers = !['shell', 'text'].includes(language);

  return (
    <ChakraHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: preBackground }}
              overflowX='auto'
              rounded='md'
              p={4}
              mx={-4}
            >
              <HStack justifyContent="flex-end" pb={2}>
                <CopyButton value={codeString.trim()} />
                {showLanguage()}
              </HStack>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <chakra.div {...lineProps} display='table-row' key={i}>
                    {showLineNumbers && (
                      <chakra.span
                        w={8}
                        display='table-cell'
                        textAlign='right'
                        userSelect='none'
                        color={lineNumberColor}
                        pr={3}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return (
                        <chakra.span
                          {...getTokenProps({ token, key })}
                          key={`${i}.${key}`}
                        />
                      );
                    })}
                  </chakra.div>
                );
              })}
            </chakra.pre>
          </div>
        );
      }}
    </ChakraHighlight>
  );
};

const InlineCode = (props: any) => (
  <chakra.code
    apply='mdx.code'
    color={useColorModeValue('blue.500', 'blue.200')}
    bg={useColorModeValue('blue.50', 'blue.900')}
    px={1}
    py={0.5}
    rounded={{ base: 'none', md: 'md' }}
    {...props}
  />
);

const LinkedHeading = (props: HTMLChakraProps<'h2'>) => {
  const slug = slugify(props.children as string, { lower: true });
  return (
    <Link href={`#${slug}`} name={slug} role='group'>
      <Box
        {...props}
        d='inline'
        color={useColorModeValue('gray.700', 'white')}
        fontFamily='heading'
      >
        {props.children}
      </Box>
      <chakra.span
        aria-label='anchor'
        color='blue.500'
        userSelect='none'
        fontWeight='normal'
        outline='none'
        _focus={{ opacity: 1, boxShadow: 'outline' }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml='0.375rem'
      >
        #
      </chakra.span>
    </Link>
  );
};

const Image = (props) => {
  return (
    <NextImage {...props} layout='responsive' loading='lazy' quality={100} />
  );
};

const Anchor = (props) => {
  const { colorMode } = useColorMode();
  return (
    <chakra.a
      color={mode('blue.500', 'blue.300')({ colorMode })}
      {...props}
    />
  );
};

const MDXComponents = {
  code: CodeHighlight,
  inlineCode: InlineCode,
  h1: (props) => <LinkedHeading as='h1' apply='mdx.h1' {...props} />,
  h2: (props) => <LinkedHeading as='h2' apply='mdx.h2' {...props} />,
  h3: (props) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  hr: (props) => <chakra.hr apply='mdx.hr' {...props} />,
  strong: (props) => <Box as='strong' fontWeight='semibold' {...props} />,
  pre: Pre,
  kbd: Kbd,
  img: Image,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? 'br' : undefined}
      h={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props) => <chakra.p apply='mdx.p' {...props} />,
  ul: (props) => (
    <chakra.ul px={{ base: 4, md: 0 }} apply='mdx.ul' {...props} />
  ),
  ol: (props) => <chakra.ol apply='mdx.ul' {...props} />,
  li: (props) => <chakra.li pb='4px' {...props} />,
  blockquote: (props) => (
    <Box>
      <Alert
        as='blockquote'
        role='none'
        rounded='4px'
        status='warning'
        variant='left-accent'
        {...props}
        w='unset'
        mx={-4}
      />
    </Box>
  ),
};

export default MDXComponents;
