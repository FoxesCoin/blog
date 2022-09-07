import Link from 'next/link';

import { Theme } from '@styles/theme';
import { AuthorListItemStyled as Styled } from './author-list-item.styled';

import type { AuthorData } from '@utils/api/author';

export const AuthorListItem = (props: AuthorData) => {
  const { logo, name, surname, description, id, background } = props;

  const fullName = name + ' ' + surname;

  return (
    <Link href={`/posts?author=${id}`}>
      <Styled.Wrapper src={background}>
        <Styled.Logo src={logo} />
        <Styled.Content>
          <Theme.Title fontSize="title">{fullName}</Theme.Title>
          <Theme.Title fontSize="subtitle">{description}</Theme.Title>
        </Styled.Content>
      </Styled.Wrapper>
    </Link>
  );
};
