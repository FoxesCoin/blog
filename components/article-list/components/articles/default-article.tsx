import Link from "next/link";
import styled from "styled-components";

import { ArticleAuthorLink } from "../article-author-link";

import { COLORS } from "@styles/color";

import type { ResponseArticle } from "@utils/api";
import { ArticleStyled as Styled } from "../article.styled";

const Title = styled(Styled.Title)`
	&::before {
		content: "";
		width: 50px;
		height: 2px;

		background-color: ${COLORS.camel};
		display: block;
		margin: 0 auto 1rem;
	}
`;

export const DefaultArticle = (props: ResponseArticle) => {
	const { title, tag, id, author } = props;

	return (
		<Link passHref href={`/posts/${id}`}>
			<Styled.Wrapper>
				<Title>{title}</Title>
				<Styled.Tag {...tag} />

				<ArticleAuthorLink {...author} />
			</Styled.Wrapper>
		</Link>
	);
};

DefaultArticle.displayName = "DefaultArticle";
