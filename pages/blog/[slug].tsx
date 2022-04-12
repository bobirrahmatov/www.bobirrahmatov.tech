import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import readingTime from "reading-time";
import { NextSeo } from "next-seo";
import { format } from "timeago.js";
import { VStack, Heading, HStack, Text} from "@chakra-ui/react";

import { BlogPost } from "@/types/blog-post";
import { getBlogPosts } from "@/utils/get-blog-posts";
import { readBlogPost } from "@/utils/read-blog-post";
import MDXComponents from "@/components/mdx-components";
import { useRouter } from "next/router";
import imageMetadata from "@/utils/plugins/image-metadata";
import ScrollToTopButton from "@/components/scroll-to-top-button";

type Props = BlogPost & {
  source: MDXRemoteSerializeResult,
};

const BlogPostPage = ({
  title,
  date,
  source,
  readingTime,
}: Props) => {
  const { query } = useRouter();
  const slug = query.slug as string;

  return (
    <>
      <NextSeo
        title={`${title} - Bobir Rahmatov`}
        openGraph={{
          title: `${title} - Bobir Rahmatov`,
          url: `https://bobirrahmatov.tech/blog/${slug}`,
        }}
      />
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <HStack
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
          ``
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
      </VStack>
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params.slug as string;

  const postContent = await readBlogPost(slug);
  const {
    content,
    data: { title, date, thumbnail },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata],
        },
      }),
      readingTime: readingTime(content).text,
      title,
      date,
      slug,
      thumbnail,
    },
  };
};

export default BlogPostPage;
