import styled from 'styled-components';

import { COLORS } from '@styles/color';
import { FONT_SIZES } from '@styles/font';

import { Theme } from '@styles/theme';

export const PostHeaderStyled = {
  Wrapper: styled(Theme.FlexColumn)`
    padding: 7.5rem 5rem 3rem;
    min-height: 400px;
    background-color: ${COLORS.deepBlack};
  `,
  Title: styled.div`
    padding-left: 1.5rem;
    border-left: 2px solid ${COLORS.camel};
    text-transform: uppercase;
    font-size: ${FONT_SIZES.title};
  `,
  AdditionalInfo: styled(Theme.FlexCentredLine)`
    margin-top: 2rem;
  `,
  Subtitle: styled.div`
    font-size: ${FONT_SIZES.regular};
  `,
  Date: styled.div`
    font-size: ${FONT_SIZES.small};
  `,
};
