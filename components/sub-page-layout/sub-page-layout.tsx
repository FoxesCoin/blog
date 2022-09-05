import styled from "styled-components";
import { Layout } from "../layout";
import { SubPageHeader, SubPageHeaderProps } from "./sub-page-header";

import { COLORS } from "@styles/color";

import { cssContent } from "@styles/theme";

import { RWrapper } from "@typings/react";

interface Props extends SubPageHeaderProps {}

const StyledLayout = styled(Layout)`
	display: grid;
	grid-template-rows: min-content 1fr;
`;

const Wrapper = styled.div`
	background-color: ${COLORS.onyxOpacity};
	margin: 2rem 0;
`;

const Content = styled.div`
	padding: 2rem 0;
	${cssContent}
`;

export const SubPageLayout: RWrapper<Props> = (props) => {
	const { className, children, subtitle, title } = props;

	return (
		<StyledLayout className={className}>
			<SubPageHeader title={title} subtitle={subtitle} />
			<Wrapper>
				<Content>{children}</Content>
			</Wrapper>
		</StyledLayout>
	);
};
