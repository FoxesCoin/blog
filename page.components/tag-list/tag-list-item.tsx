import { COLORS } from "@styles/color";
import styled from "styled-components";

import { Theme } from "@styles/theme";

import type { RElement } from "@typings/react";
import type { TagData } from "@utils/api/tag";
import Link from "next/link";

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

export const TagListItem: RElement<TagData> = (props) => {
	const { className, name, subtitle, background, id } = props;

	return (
		<Link href={`/posts?tag=${id}`}>
			<Wrapper className={className} background={background}>
				<Theme.Title fontSize="title">{name}</Theme.Title>
				<Theme.Title fontSize="subtitle">{subtitle}</Theme.Title>
			</Wrapper>
		</Link>
	);
};
