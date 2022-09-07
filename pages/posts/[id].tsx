import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { Layout } from '@components/layout';
import { PostHeader } from '@page.components/post';

import { getAllArticlesId, getArticleById, ResponseArticle } from '@utils/api';

import { cssContent } from '@styles/theme';

import { COLORS } from '@styles/color';

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-rows: min-content 1fr;

  background-color: ${COLORS.onyx};
`;

const Content = styled.main`
  ${cssContent}
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Post: NextPage<ResponseArticle> = (props) => {
  const { author, content, dateCreate, subtitle, tag, title } = props;
  return (
    <StyledLayout>
      <PostHeader
        title={title}
        subtitle={subtitle}
        tag={tag}
        author={author}
        dateCreate={dateCreate}
      />
      <Content>{content}</Content>
    </StyledLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticlesId();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ResponseArticle,
  { id: string }
> = async ({ params }) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  const article = await getArticleById(+params.id);

  return {
    props: article,
  };
};

export default Post;
