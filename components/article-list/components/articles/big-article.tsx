import Link from 'next/link';
import styled from 'styled-components';

import { AuthorLink } from '@components/author-link';

import { COLORS } from '@styles/color';

import { Theme } from '@styles/theme';
import { ArticleStyled as Styled } from '../article.styled';

import type { ReactElement } from '@typings/react';
import type { ResponseArticle } from '@utils/api';

type Props = ResponseArticle & ReactElement;

const Tag = styled(Styled.Tag)`
  padding-bottom: 1rem;
  border-bottom: 2px solid ${COLORS.camel};
`;

export const BigArticle = (props: Props) => {
  const { className, title, tag, subtitle, author, id } = props;

  return (
    <Link passHref href={`/posts/${id}`}>
      <Styled.Wrapper className={className}>
        <Styled.Title>{title}</Styled.Title>
        <Tag {...tag} />
        <Theme.Title fontFamily="thin" fontSize="subtitle">
          {subtitle}
        </Theme.Title>
        <AuthorLink isAbsolutePosition {...author} />
      </Styled.Wrapper>
    </Link>
  );
};

BigArticle.displayName = 'BigArticle';
