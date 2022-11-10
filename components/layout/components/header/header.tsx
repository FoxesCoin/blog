import { StyledLink } from '@components/styled-link';
import { SearchModal } from '../search-modal';

import { Theme } from '@styles/theme';
import Search from 'public/image/search.svg';

import { useHeaderState } from './header.state';
import { HeaderStyled as Styled } from './header.styled';

export const Header = () => {
  const { closeSearchModal, isOpenSearchModal, isSticky, openSearchModal } =
    useHeaderState();

  return (
    <Styled.Wrapper className={isSticky ? 'sticky' : ''}>
      <Styled.Content>
        <StyledLink href="/" text="BLOG" fontSize="header" />
        <Theme.GapRow gap={32}>
          <StyledLink href="/about-us" text="ABOUT US" />
          <StyledLink href="/author-list" text="AUTHOR LIST" />
          <StyledLink href="/tag-list" text="TAG LIST" />
          <Styled.SearchButton onClick={openSearchModal}>
            <Search />
          </Styled.SearchButton>
        </Theme.GapRow>
      </Styled.Content>
      {isOpenSearchModal && <SearchModal closeModal={closeSearchModal} />}
    </Styled.Wrapper>
  );
};
