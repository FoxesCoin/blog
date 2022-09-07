import styled from "styled-components";

import { MEDIA } from "@styles/media";
import { cssContent } from "@styles/theme";

export const ArticleListStyled = {
	Content: styled.main`
		${cssContent}
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 2rem;
		column-gap: 1rem;
		grid-template-rows: 500px;
		grid-auto-rows: 330px;

		& > *:first-child {
			grid-area: 1 / 1 / 2 / 3;
		}

		& > *:nth-child(2) {
			grid-area: 1 / 3 / 2 / 4;
		}

		${MEDIA.LAPTOP} {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 500px 500px;

			& > *:first-child {
				grid-area: 1 / 1 / 2 / 3;
			}

			& > *:nth-child(2) {
				grid-area: 2 / 1 / 3 / 3;
			}
		}

		${MEDIA.SMARTPHONE} {
			justify-content: center;
			grid-template-columns: 300px;
			grid-template-rows: minmax(300px, min-content);
			grid-auto-rows: minmax(300px, min-content);

			& > *:first-child {
				grid-area: unset;
			}

			& > *:nth-child(2) {
				grid-area: unset;
			}
		}
	`,
};
