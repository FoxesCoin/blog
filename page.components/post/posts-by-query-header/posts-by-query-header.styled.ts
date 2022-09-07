import styled from 'styled-components';

import { COLORS } from '@styles/color';

import { cssBackground, cssContent } from '@styles/theme';

export const PostsByQueryHeaderStyled = {
  Wrapper: styled.div`
    min-height: 400px;
    background-color: ${COLORS.deepBlack};
    ${cssBackground}
  `,
  Content: styled.div`
    ${cssContent}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2rem;
    gap: 1rem;
  `,
};
