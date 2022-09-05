import styled from "styled-components";

import { COLORS } from "@styles/color";

import { cssRound } from "@styles/theme";

const Content = styled.div`
	background-color: ${COLORS.deepBlack};
	height: 200px;
	margin-top: 100px;
	padding: 75px 2rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	transition: all 0.3s;
`;

const Logo = styled.div<{ src: string }>`
	${cssRound(150)}
	transition: all 0.3s;
	position: absolute;
	background-color: ${COLORS.white};
	background-image: url(${(props) => props.src});
	background-size: contain;
	left: 75px;
	top: 25px;
`;

export const AuthorListItemStyled = {
	Content,
	Logo,
	Wrapper: styled.div`
		position: relative;
		background-color: ${COLORS.transparent};
		width: 300px;
		height: 300px;
		cursor: pointer;

		&:hover {
			& ${Logo} {
				box-shadow: 0px 0px 5px 5px ${COLORS.white};
			}

			& ${Content} {
				box-shadow: 0px 0px 10px 5px ${COLORS.deepBlack};
			}
		}
	`,
};
