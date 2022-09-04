import styled from "styled-components";

import { Footer, Header } from "./components";

import { COLORS } from "@styles/color";

import { RWrapper } from "@typings/react";

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;

	background-color: ${COLORS.deepBlack};
`;

export const Layout: RWrapper = ({ children, className }) => (
	<Wrapper className={className}>
		<Header />
		{children}
		<Footer />
	</Wrapper>
);
