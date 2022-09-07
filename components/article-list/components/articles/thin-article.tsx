import Link from "next/link";
import styled from "styled-components";

import { AuthorLink } from "@components/author-link";

import { COLORS } from "@styles/color";

import { Theme } from "@styles/theme";
import { ArticleStyled as Styled, cssArticleWrapper } from "../article.styled";

import type { ResponseArticle } from "@utils/api";

const Wrapper = styled.div`
	${cssArticleWrapper}

	display: grid;
	grid-template-rows: min-content min-content min-content 1fr;
	grid-template-columns: 1fr;

	padding: 2.5rem;
`;

const Title = styled(Theme.Paragraph)`
	text-transform: uppercase;
	padding-left: 1rem;
	border-left: 2px solid ${COLORS.camel};
`;

const Subtitle = styled(Theme.Text)`
	align-self: flex-end;
`;

export const ThinArticle = (props: ResponseArticle) => {
	const { title, tag, subtitle, id, author } = props;

	return (
		<Link passHref href={`/posts/${id}`}>
			<Wrapper>
				<Title>{title}</Title>
				<Styled.Tag {...tag} />
				<AuthorLink {...author} />
				<Subtitle fontFamily="thin" fontSize="subtitle">
					{subtitle}
				</Subtitle>
			</Wrapper>
		</Link>
	);
};

ThinArticle.displayName = "ThinArticle";
