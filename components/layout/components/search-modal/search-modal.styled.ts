import styled from 'styled-components';

import { cssContent, cssRound } from '@styles/theme';

import { COLORS } from '@styles/color';
import { Z_INDEX } from '@styles/z-index';

export const SearchModalStyled = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${COLORS.deepBlack};
    z-index: ${Z_INDEX.modal};
    animation-fill-mode: both;
  `,
  Content: styled.div`
    ${cssContent}

    position: relative;
    display: grid;

    grid-template-rows: min-content 1fr min-content;
    height: 100%;
    padding: 4rem 0;
    row-gap: 1.5rem;
  `,
  CloseIcon: styled.div`
    transition: all 0.4s;
    padding: 0.6rem;
    position: absolute;
    z-index: 1;

    right: 2rem;
    top: 2rem;

    & {
      ${cssRound(40)}
    }

    &:hover {
      background-color: ${COLORS.onyx};
    }
  `,
  SearchBar: styled.input`
    background-color: ${COLORS.transparent};
    color: ${COLORS.white};
    border: unset;
    border-bottom: 2px solid ${COLORS.camel};
    padding-bottom: 0.5rem;
  `,
  SearchResultList: styled.div`
    overflow-y: auto;
  `,
};
