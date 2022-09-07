import Link from 'next/link';
import styled from 'styled-components';

import { AuthorLink } from '@components/author-link';

import { COLORS } from '@styles/color';

import { ArticleStyled as Styled } from '../article.styled';

import type { ResponseArticle } from '@utils/api';

const Title = styled(Styled.Title)`
  &::before {
    content: '';
    width: 50px;
    height: 2px;

    background-color: ${COLORS.camel};
    display: block;
    margin: 0 auto 1rem;
  }
`;

export const DefaultArticle = (props: ResponseArticle) => {
  const { title, tag, id, author, background } = props;

  return (
    <Link passHref href={`/posts/${id}`}>
      <Styled.Wrapper src={background}>
        <Title>{title}</Title>
        <Styled.Tag {...tag} />
        <AuthorLink isAbsolutePosition {...author} />
      </Styled.Wrapper>
    </Link>
  );
};

DefaultArticle.displayName = 'DefaultArticle';
