import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { SubPageLayout } from "@components/sub-page-layout";
import { AuthorListItem } from "@page.components/author-list";

import { getAuthors } from "@utils/api";

import { cssGridList } from "@styles/theme";

import type { AuthorData } from "@utils/api/author";

interface Props {
	authors: AuthorData[];
}

const StyledLayout = styled(SubPageLayout)`
	${cssGridList}
`;

const AuthorList: NextPage<Props> = (props) => {
	const { authors } = props;

	return (
		<StyledLayout title="OUT AUTHORS" subtitle="Incredible people">
			<Head>
				<title>Author list</title>
				<meta name="description" content="Author list" />
			</Head>
			{authors.map((author) => (
				<AuthorListItem key={author.id} {...author} />
			))}
		</StyledLayout>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const authors = await getAuthors();

	return {
		props: {
			authors,
		},
	};
};

export default AuthorList;
