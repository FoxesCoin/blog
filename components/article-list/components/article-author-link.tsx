import styled from "styled-components";

import { COLORS } from "@styles/color";

import { cssRound, Theme } from "@styles/theme";

import type { RElement } from "@typings/react";
import { ResponseAuthor } from "@utils/api";
import Link from "next/link";

const Wrapper = styled.div`
	position: absolute;

	bottom: 1rem;
	left: 1rem;

	&:hover {
		color: ${COLORS.camel};
	}
`;

const Logo = styled.div<{ src: string }>`
	${cssRound(40)}
	transition: all 0.3s;
	background-color: ${COLORS.white};
	background-image: url(${(props) => props.src});
	background-size: contain;
`;

const Text = styled(Theme.Text)`
	transition: 0.2s all;
`;

export const ArticleAuthorLink: RElement<ResponseAuthor> = (props) => {
	const { className, logo, fullName, id } = props;

	return (
		<Wrapper className={className}>
			<Link href={`/posts?author=${id}`}>
				<Theme.GapRow>
					<Logo src={logo} />
					<Text fontSize="small">{fullName}</Text>
				</Theme.GapRow>
			</Link>
		</Wrapper>
	);
};
