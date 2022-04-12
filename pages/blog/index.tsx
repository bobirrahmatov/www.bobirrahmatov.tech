import { ChangeEventHandler, useState } from 'react';
import { GetStaticProps } from 'next';
import {
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { HiOutlineSearch } from 'react-icons/hi';

import { BlogPost } from '@/types/blog-post';
import { getBlogPosts } from '@/utils/get-blog-posts';
import BlogPostCard from '@/components/blog-post-card';

type Props = {
  posts: BlogPost[];
};

const Blog = ({ posts }: Props) => {
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>(posts);

  const onSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    const query = event.currentTarget.value;

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    setDisplayPosts(filteredPosts);
  };

  return (
    <>
      <NextSeo title='Blog - Bobir Rahmatov'/>
      <VStack as='section' alignItems='flex-start' w='full' spacing={3}>
        <Heading size='md'>Blog.</Heading>
        <Text fontSize='md'>
          Posts about coding, projects and various other things. 
          I’m a self-taught developer trying to learn new technologies and sharing my experiences and knowledge.
          I’ve written a total of {posts.length} articles. I hope you enjoy it 🍵.
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={HiOutlineSearch} color='gray.400' />
          </InputLeftElement>
          <Input
            onChange={onSearch}
            placeholder='Search blog articles'
            variant='filled'
          />
        </InputGroup>
      </VStack>
      <List w='full' spacing={2}>
        {displayPosts.map((post) => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && 
      <Text>
        No posts found for that query 🥺, please contact me if you would like 
        to see more posts about this query.
      </Text>}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getBlogPosts();

  const props: Props = {
    posts,
  };

  return {
    props,
  };
};

export default Blog;
