import { Theme } from '@styles/theme';
import { ResponseArticle } from '@utils/api';
import Link from 'next/link';

import { FullScreenArticleStyled as Styled } from './full-screen-article.styled';

export const FullScreenArticle = (props: ResponseArticle) => {
  const { id, tag, title, subtitle } = props;

  return (
    <Link href={`/posts/${id}`}>
      <Styled.Wrapper>
        <Styled.Content>
          <Theme.GapColumn>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Tag {...tag} />
          </Theme.GapColumn>
          <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        </Styled.Content>
      </Styled.Wrapper>
    </Link>
  );
};
