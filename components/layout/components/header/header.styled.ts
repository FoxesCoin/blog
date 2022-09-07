import styled from 'styled-components';

import { COLORS } from '@styles/color';
import { Z_INDEX } from '@styles/z-index';

import { cssContent, cssSquare } from '@styles/theme';

export const HeaderStyled = {
  Wrapper: styled.header<{ isSticky: boolean }>`
    top: 0;
    position: absolute;
    width: 100%;

    background-color: ${COLORS.transparent};
    transition: all 0.3s;

    padding-top: 2rem;
    padding-bottom: 2rem;
    z-index: ${Z_INDEX.topBar};

    &.sticky {
      position: fixed;
      background-color: ${COLORS.deepBlack};
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `,

  Content: styled.div`
    display: flex;

    justify-content: space-between;

    ${cssContent}
  `,

  SearchButton: styled.div`
    &,
    & > svg {
      ${cssSquare(20)}
    }
  `,
};
