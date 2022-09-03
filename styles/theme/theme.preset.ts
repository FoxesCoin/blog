import { css } from "styled-components";

import { FontSize, FONT_SIZES } from "@styles/font-size";
import { MEDIA } from "@styles/media";

interface Flex {
	gap?: number;
}

export interface Typography {
	fontSize?: FontSize;
}

export const cssGap = css<Flex>`
	gap: ${(props) => props.gap ?? 8}px;
`;

export const cssText = css<Typography>(
	({ fontSize }) => `
  ${fontSize ? `font-size: ${FONT_SIZES[fontSize]};` : ""}
  `
);

export const cssAbsoluteCentralize = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const cssFlexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const cssFullSize = css`
	min-height: 100%;
	width: 100%;
`;

export const cssFullSizeAbsolute = css`
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	position: absolute;
`;

export const cssFullScreenFixed = css`
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	position: fixed;
`;

export const cssRound = (size: number) => css`
	width: ${size}px;
	height: ${size}px;
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
`;
