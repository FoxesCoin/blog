import styled, { css } from 'styled-components';

import { COLORS } from '@styles/color';
import { FONT_SIZES } from '@styles/font';

import { TagLink } from '@components/tag-link';
import { Theme } from '@styles/theme';

export const cssArticleWrapper = css`
  background-color: ${COLORS.deepBlack};
  position: relative;

  &:hover {
    box-shadow: 0px 0px 5px 5px ${COLORS.deepBlack};
  }
`;

export const ArticleStyled = {
  Wrapper: styled(Theme.FlexColumnCenter)`
    ${cssArticleWrapper}
  `,

  Title: styled.div`
    text-transform: uppercase;
    font-size: ${FONT_SIZES.header};
  `,

  Tag: styled(TagLink)`
    text-transform: uppercase;
    font-size: ${FONT_SIZES.subtitle};
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  `,

  Subtitle: styled.p`
    text-transform: uppercase;
    font-size: ${FONT_SIZES.subtitle};
  `,
};
