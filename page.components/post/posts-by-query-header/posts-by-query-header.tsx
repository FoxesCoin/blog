import { PostCounter } from '../post-counter';

import { PostsByQueryHeaderStyled as Styled } from './posts-by-query-header.styled';

import type { RWrapper } from '@typings/react';

interface Props {
  posts: number;
}

export const PostsByQueryHeader: RWrapper<Props> = (props) => {
  const { className, posts, children } = props;

  return (
    <Styled.Wrapper className={className}>
      <Styled.Content>
        {children}
        <PostCounter counter={posts} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
