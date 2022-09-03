import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { Layout } from "@components/layout";

import { cssFlexCenter, Theme } from "@styles/theme";

const Wrapper = styled.div`
	${cssFlexCenter}

	width: 100%;
	height: 100vh;
`;

const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>Small blog</title>
			<meta name="description" content="Small blog" />
		</Head>
		<Wrapper>
			<Theme.Text fontSize="title">Welcome to blog!</Theme.Text>
		</Wrapper>
	</Layout>
);

export default Home;
