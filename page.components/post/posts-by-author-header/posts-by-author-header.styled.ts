import styled from 'styled-components';

import { COLORS } from '@styles/color';

import { cssRound, Theme } from '@styles/theme';

export const PostsByAuthorHeaderStyled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 2rem;
    padding-top: 8rem;
  `,
  Info: styled(Theme.GapRow)`
    flex: 0 0 auto;
  `,
  Icon: styled.div<{ src: string }>`
    background-color: ${COLORS.white};
    background-image: url(${(props) => props.src});
    ${cssRound(100)}
    background-size: contain;
  `,
};
