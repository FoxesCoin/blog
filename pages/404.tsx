import styled from "styled-components";

import { COLORS } from "@styles/color";

import { Theme } from "@styles/theme";

const Wrapper = styled(Theme.FlexCenter)`
	background-color: ${COLORS.deepBlack};
	height: 100vh;
`;

export default function Custom404() {
	return (
		<Wrapper>
			<h1>404 - Page Not Found</h1>;
		</Wrapper>
	);
}
