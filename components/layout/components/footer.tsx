import styled from "styled-components";

import { cssContent, cssFlexCenter } from "@styles/theme";

const Wrapper = styled.footer`
	height: 120px;

	${cssContent}
	${cssFlexCenter}
`;

export const Footer = () => <Wrapper>BLOG 2022</Wrapper>;
