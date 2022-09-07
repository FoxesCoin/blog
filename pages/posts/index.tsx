import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

import { ArticleList } from '@components/article-list';
import { Layout } from '@components/layout';
import { PostsByAuthorHeader, PostsByTagHeader } from '@page.components/post';

import {
  getArticleByAuthor,
  getArticleByTag,
  getAuthorById,
  getTagById,
  ResponseArticle,
} from '@utils/api';

import type { AuthorData } from '@utils/api/author';
import type { TagData } from '@utils/api/tag';

interface Props {
  articles: ResponseArticle[];
  header: AuthorData | TagData;
}

interface Query {
  tag?: string;
  author?: string;
}

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  row-gap: 2rem;
`;

const isAuthor = (data: AuthorData | TagData): data is AuthorData =>
  !!(data as any)?.description;

const Posts: NextPage<Props> = (props) => {
  const { articles, header } = props;

  return (
    <StyledLayout>
      {isAuthor(header) ? (
        <PostsByAuthorHeader posts={articles.length} {...header} />
      ) : (
        <PostsByTagHeader posts={articles.length} {...header} />
      )}
      <ArticleList articles={articles} />
    </StyledLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const queryObject = query as Query;

  if (!queryObject?.author && !queryObject?.tag) {
    return {
      notFound: true,
    };
  }

  if (queryObject?.author) {
    const id = +queryObject.author;
    const [articles, header] = await Promise.all([
      getArticleByAuthor(id),
      getAuthorById(id),
    ]);
    return { props: { articles, header } };
  }

  if (queryObject?.tag) {
    const id = +queryObject.tag;
    const [articles, header] = await Promise.all([
      getArticleByTag(id),
      getTagById(id),
    ]);

    return { props: { articles, header } };
  }

  return {
    notFound: true,
  };
};

export default Posts;
