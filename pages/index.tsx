import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { ArticleList } from "@components/article-list";
import { Layout } from "@components/layout";

import { getArticles, ResponseArticle } from "@utils/api";

import { cssFlexCenter, Theme } from "@styles/theme";

const Wrapper = styled.div`
	${cssFlexCenter}

	width: 100%;
	height: 100vh;
`;

interface Props {
	articles: ResponseArticle[];
}

const Home: NextPage<Props> = (props) => (
	<Layout>
		<Head>
			<title>Small blog</title>
			<meta name="description" content="Small blog" />
		</Head>
		<Wrapper>
			<Theme.Text fontSize="title">Welcome to blog!</Theme.Text>
		</Wrapper>

		<ArticleList articles={props.articles} />
	</Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
	const articles = await getArticles();

	return {
		props: {
			articles,
		},
	};
};

export default Home;
