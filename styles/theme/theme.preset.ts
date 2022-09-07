import { css } from 'styled-components';

import { Color, COLORS } from '@styles/color';
import { FontFamily, FontSize, FONT_FAMILY, FONT_SIZES } from '@styles/font';
import { MEDIA } from '@styles/media';

interface Flex {
  gap?: number;
}

export interface Typography {
  fontSize?: FontSize;
  fontFamily?: FontFamily;
  color?: Color;
}

export const cssGap = css<Flex>`
  gap: ${(props) => props.gap ?? 8}px;
`;

export const cssTypography = css<Typography>(
  ({ fontSize, color, fontFamily }) => `
  ${fontSize ? `font-size: ${FONT_SIZES[fontSize]};` : ''}
  ${fontFamily ? `font-family: ${FONT_FAMILY[fontFamily]}, sans-serif;` : ''}
  ${color ? `color: ${COLORS[color]};` : ''}
  `
);

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssSquare = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
`;

export const cssRound = (size: number) => css`
  ${cssSquare(size)}
  border-radius: 50%;
`;

export const cssContent = css`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  ${MEDIA.LAPTOP} {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  ${MEDIA.SMARTPHONE} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export const cssGridList = css`
  display: grid;
  row-gap: 3rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  justify-content: center;
`;

export const cssBackground = css<{ src: string }>`
  background-color: ${COLORS.deepBlack};

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
