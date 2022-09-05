import styled, { css, keyframes } from "styled-components";

import { FONT_SIZES } from "@styles/font-size";
import { cssFlexCenter } from "@styles/theme";

const moveUp = keyframes`
from {
  opacity: 0;
  transform: translateY(100%);
}

to { 
  opacity: 1;
  transform: translateY(0);
}
`;

const cssAnimation = css`
	animation-name: ${moveUp};
	animation-duration: 1s;
	animation-fill-mode: both;
`;

export const SubPageHeaderStyled = {
	Wrapper: styled.div`
		${cssFlexCenter}
		height: 360px;
		flex-direction: column;
	`,
	Title: styled.h1`
		text-align: center;
		font-size: ${FONT_SIZES.title};

		animation-delay: 0.5s;
		${cssAnimation}
	`,
	Subtitle: styled.h2`
		text-align: center;
		font-size: ${FONT_SIZES.subtitle};
		margin-top: 0.75rem;

		animation-delay: 1.5s;
		${cssAnimation}
	`,
};
