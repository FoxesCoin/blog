import Link from "next/link";
import styled from "styled-components";

import { COLORS } from "@styles/color";

import { FontSize } from "@styles/font-size";
import { RElement } from "@typings/react";

interface Props {
	href: string;
	text: string;

	fontSize?: FontSize;
}

const Text = styled.span<{ fontSize: FontSize }>`
	transition: all 0.2s;
	cursor: pointer;
	font-size: ${(props) => props.fontSize};

	&:hover {
		color: ${COLORS.camel};
	}
`;

export const PageLink: RElement<Props> = (props) => {
	const { className, href, text, fontSize = "small" } = props;

	return (
		<Link href={href}>
			<Text className={className} fontSize={fontSize}>
				{text}
			</Text>
		</Link>
	);
};
