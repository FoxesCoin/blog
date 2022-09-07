import { SubPageHeader } from '@components/sub-page-header';
import { PostsByQueryHeader } from './posts-by-query-header';

import type { TagData } from '@utils/api/tag';

interface Props extends Omit<TagData, 'id'> {
  posts: number;
}

export const PostsByTagHeader = (props: Props) => {
  const { name, posts, subtitle } = props;

  return (
    <PostsByQueryHeader posts={posts}>
      <SubPageHeader title={`TAG: ${name}`} subtitle={subtitle} />
    </PostsByQueryHeader>
  );
};
