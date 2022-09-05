import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { SubPageLayout } from "@components/sub-page-layout";
import { AuthorListItem } from "./author-list-item";

import { getAuthors } from "@utils/api";

import { Theme } from "@styles/theme";

import type { AuthorData } from "@utils/api/author";

interface Props {
	authors: AuthorData[];
}

const AuthorList: NextPage<Props> = (props) => {
	const { authors } = props;

	return (
		<SubPageLayout title="OUT AUTHORS" subtitle="Incredible people">
			<Head>
				<title>Author list</title>
				<meta name="description" content="Author list" />
			</Head>
			<Theme.Grid>
				{authors.map((author) => (
					<AuthorListItem key={author.id} {...author} />
				))}
			</Theme.Grid>
		</SubPageLayout>
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
