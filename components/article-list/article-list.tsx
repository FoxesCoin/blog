import { ArticleListStyled as Styled } from "./article-list.styled";

import { BigArticle, DefaultArticle, ThinArticle } from "./components";

import type { RElement } from "@typings/react";
import type { ResponseArticle } from "@utils/api";

interface Props {
	articles: ResponseArticle[];
}

const parseArticle = (article: ResponseArticle, index: number) => {
	switch (index) {
		case 0:
			return <BigArticle key={article.id} {...article} />;
		case 1:
			return <ThinArticle key={article.id} {...article} />;
		default:
			return <DefaultArticle key={article.id} {...article} />;
	}
};

export const ArticleList: RElement<Props> = (props) => {
	const { className, articles } = props;

	return (
		<Styled.Wrapper className={className}>
			<Styled.Content>{articles.map(parseArticle)}</Styled.Content>
		</Styled.Wrapper>
	);
};
