import { Theme } from "@styles/theme";
import { AuthorListItemStyled as Styled } from "./author-list-item.styled";

import type { RElement } from "@typings/react";
import type { AuthorData } from "@utils/api/author";

export const AuthorListItem: RElement<AuthorData> = (props) => {
	const { className, logo, name, surname, description } = props;

	const fullName = name + " " + surname;

	return (
		<Styled.Wrapper className={className}>
			<Styled.Logo src={logo} />
			<Styled.Content>
				<Theme.Title fontSize="title">{fullName}</Theme.Title>
				<Theme.Title fontSize="subtitle">{description}</Theme.Title>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
