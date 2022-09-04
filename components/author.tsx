import styled from "styled-components";

import { cssRound, Theme } from "@styles/theme";

import { COLORS } from "@styles/color";
import { RElement } from "@typings/react";
import type { AuthorData } from "@utils/api/author";

interface Props extends AuthorData {}

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

const Wrapper = styled.div`
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
`;

export const Author: RElement<Props> = (props) => {
	const { className, logo, name, surname, description } = props;

	const fullName = name + " " + surname;

	return (
		<Wrapper className={className}>
			<Logo src={logo} />
			<Content>
				<Theme.Title fontSize="title">{fullName}</Theme.Title>
				<Theme.Title fontSize="subtitle">{description}</Theme.Title>
			</Content>
		</Wrapper>
	);
};
