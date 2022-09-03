import type { NextPage } from "next";
import Head from "next/head";

import { SubPageLayout } from "@components/sub-page-layout";

const TagList: NextPage = () => {
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

export default TagList;
