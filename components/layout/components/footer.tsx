import styled from "styled-components";

import { cssContent, Theme } from "@styles/theme";

import { COLORS } from "@styles/color";
import GitHub from "public/image/github.svg";
import LinkedIn from "public/image/linkedin.svg";

const Wrapper = styled.footer`
	height: 120px;

	background-position: bottom;
	background-image: url("/footer_background.jpg");
`;

const Link = styled.a`
	&,
	& > svg {
		width: 50px;
		height: 50px;
	}

	& > svg {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 5px;

		&,
		& > path {
			transition: all 0.25s;
		}

		&:hover {
			path {
				fill: ${COLORS.lightBlue};
			}

			background-color: ${COLORS.onyxOpacity};
		}
	}
`;

const Content = styled(Theme.FlexLine)`
	height: 100%;

	${cssContent}
`;

export const Footer = () => (
	<Wrapper>
		<Content>
			<Theme.Text>BLOG 2022</Theme.Text>
			<Theme.GapRow gap={16}>
				<Link href="http://linkedin.com/in/zaichenko-denis">
					<LinkedIn />
				</Link>
				<Link href="https://github.com/FoxesCoin">
					<GitHub />
				</Link>
			</Theme.GapRow>
		</Content>
	</Wrapper>
);
