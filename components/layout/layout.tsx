import { RWrapper } from "@typings/react";
import styled from "styled-components";
import { Footer, Header } from "./components";

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;

	background-color: black;
`;

export const Layout: RWrapper = ({ children, className }) => (
	<Wrapper className={className}>
		<Header />
		{children}
		<Footer />
	</Wrapper>
);
