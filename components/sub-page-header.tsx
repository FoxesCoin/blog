import styled from "styled-components";

import { FONT_SIZES } from "@styles/font-size";

import { cssFlexCenter } from "@styles/theme";
import { RElement } from "@typings/react";

export interface SubPageHeaderProps {
	title: string;
	subtitle: string;
}

const Wrapper = styled.div`
	${cssFlexCenter}
	height: 360px;
	flex-direction: column;
`;

const Title = styled.h1`
	text-align: center;
	font-size: ${FONT_SIZES.title};
`;

const Subtitle = styled.h2`
	text-align: center;
	font-size: ${FONT_SIZES.subtitle};
	margin-top: 0.75rem;
`;

export const SubPageHeader: RElement<SubPageHeaderProps> = (props) => {
	const { className, subtitle, title } = props;

	return (
		<Wrapper className={className}>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Wrapper>
	);
};
