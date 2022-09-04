import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { SubPageLayout } from "@components/sub-page-layout";

import { getAuthors } from "@utils/api";

import type { Author } from "@utils/api/author";

interface Props {
	authors: Author[];
}

const AuthorList: NextPage<Props> = () => {
	return (
		<SubPageLayout title="OUT AUTHORS" subtitle="Incredible people">
			<Head>
				<title>Author list</title>
				<meta name="description" content="Author list" />
			</Head>
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
