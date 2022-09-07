import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { ArticleList } from '@components/article-list';
import { Layout } from '@components/layout';
import { FullScreenPreviewArticle } from '@page.components/main';

import { getArticles, getTopArticles, ResponseArticle } from '@utils/api';

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  row-gap: 2rem;
`;

interface Props {
  articles: ResponseArticle[];
  topArticles: ResponseArticle[];
}

const Home: NextPage<Props> = (props) => (
  <StyledLayout>
    <Head>
      <title>Small blog</title>
      <meta name="description" content="Small blog" />
    </Head>
    <FullScreenPreviewArticle articles={props.topArticles} />

    <ArticleList articles={props.articles} />
  </StyledLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [articles, topArticles] = await Promise.all([
    getArticles(),
    getTopArticles(),
  ]);

  return {
    props: {
      articles,
      topArticles,
    },
  };
};

export default Home;
