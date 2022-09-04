import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { SubPageLayout } from "@components/sub-page-layout";

import { getTags } from "@utils/api";

import type { Tag } from "@utils/api/tag";

interface Props {
	tags: Tag[];
}

const TagList: NextPage<Props> = (props) => {
	return (
		<SubPageLayout
			title="CATEGORIES"
			subtitle="Maybe you search for something specific?"
		>
			<Head>
				<title>Tag list</title>
				<meta name="description" content="Tag list" />
			</Head>
		</SubPageLayout>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const tags = await getTags();

	return {
		props: {
			tags,
		},
	};
};

export default TagList;
