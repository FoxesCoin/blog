import { PostsByQueryHeader } from '../posts-by-query-header';

import { Theme } from '@styles/theme';

import { PostsByAuthorHeaderStyled as Styled } from './posts-by-author-header.styled';

import type { AuthorData } from '@utils/api/author';

interface Props extends Omit<AuthorData, 'id'> {
  posts: number;
}

export const PostsByAuthorHeader = (props: Props) => {
  const { name, surname, logo, posts, description } = props;

  return (
    <PostsByQueryHeader posts={posts}>
      <Styled.Wrapper>
        <Styled.Info gap={16}>
          <Styled.Icon src={logo} />
          <Theme.Text fontSize="title">
            {name} {surname}
          </Theme.Text>
        </Styled.Info>
        <Theme.Paragraph fontSize="subtitle" fontFamily="thin">
          {description}
        </Theme.Paragraph>
      </Styled.Wrapper>
    </PostsByQueryHeader>
  );
};
