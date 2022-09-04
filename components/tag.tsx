import { COLORS } from "@styles/color";
import styled from "styled-components";

import { Theme } from "@styles/theme";

import type { RElement } from "@typings/react";
import type { Tag as TagData } from "@utils/api/tag";

const Wrapper = styled(Theme.FlexColumnCenter)<{ background: string }>`
	background-color: ${COLORS.deepBlack};
	background-image: url(${(props) => props.background});

	gap: 1rem;
	padding: 2rem;

	&,
	& > *:first-child {
		transition: all 0.3s;
	}

	&:hover {
		box-shadow: 0px 0px 10px 5px ${COLORS.lightBlue};

		& > *:first-child {
			color: ${COLORS.camel};
		}
	}
`;

export const Tag: RElement<TagData> = (props) => {
	const { className, name, subtitle, background } = props;

	return (
		<Wrapper className={className} background={background}>
			<Theme.Title fontSize="title">{name}</Theme.Title>
			<Theme.Title fontSize="subtitle">{subtitle}</Theme.Title>
		</Wrapper>
	);
};
