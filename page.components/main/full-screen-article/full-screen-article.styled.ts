import styled, { keyframes } from 'styled-components';

import { TagLink } from '@components/tag-link';

import { COLORS } from '@styles/color';
import { FONT_SIZES } from '@styles/font';

import { cssContent, Theme } from '@styles/theme';

const showTag = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const showTitle = keyframes`
	0% {
		opacity: 0;
		transform: translateY(40rem);
	}
	
	10% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const showSubtitle = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-10rem);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const FullScreenArticleStyled = {
  Wrapper: styled(Theme.FlexCenter)`
    width: 100%;
    height: 100vh;
    flex: 0 0 auto;

    padding: 14rem 0;
  `,
  Content: styled.div`
    ${cssContent}

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  `,
  Title: styled.div`
    padding-left: 1.5rem;
    border-left: 2px solid ${COLORS.camel};
    text-transform: uppercase;
    font-size: ${FONT_SIZES.title};

    animation-name: ${showTitle};
    animation-duration: 1s;
    animation-timing-function: ease-out;
  `,

  Subtitle: styled.div`
    animation-name: ${showSubtitle};
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  `,

  Tag: styled(TagLink)`
    margin-left: calc(1.5rem + 2px);
    margin-top: 1rem;

    animation-name: ${showTag};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: both;
    animation-timing-function: linear;
  `,
};
