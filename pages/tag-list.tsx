import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { SubPageLayout } from '@components/sub-page-layout';
import { TagListItem } from '@page.components/tag-list';

import { getTags } from '@utils/api';

import { cssGridList } from '@styles/theme';

import type { TagData } from '@utils/api/tag';

interface Props {
  tags: TagData[];
}

const StyledLayout = styled(SubPageLayout)`
  ${cssGridList}
`;

const TagList: NextPage<Props> = (props) => {
  const { tags } = props;
  return (
    <StyledLayout
      background="/image/background/tag-list.jpg"
      title="CATEGORIES"
      subtitle="Maybe you search for something specific?"
    >
      <Head>
        <title>Tag list</title>
        <meta name="description" content="Tag list" />
      </Head>
      {tags.map((tag) => (
        <TagListItem key={tag.id} {...tag} />
      ))}
    </StyledLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tags = await getTags();

  return {
    props: {
      tags,
    },
  };
};

export default TagList;
