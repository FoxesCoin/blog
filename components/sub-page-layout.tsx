import { Layout } from "./layout";
import { SubPageHeader, SubPageHeaderProps } from "./sub-page-header";

import { RWrapper } from "@typings/react";
import styled from "styled-components";

interface Props extends SubPageHeaderProps {}

const Wrapper = styled(Layout)`
	display: grid;
	grid-template-rows: min-content 1fr;
`;

export const SubPageLayout: RWrapper<Props> = (props) => {
	const { className, children, subtitle, title } = props;

	return (
		<Wrapper className={className}>
			<SubPageHeader title={title} subtitle={subtitle} />
			<div>{children}</div>
		</Wrapper>
	);
};
