import { NextPage } from "next";
import Head from "next/head";

import { SubPageLayout } from "@components/sub-page-layout";

const AuthorList: NextPage = () => {
	return (
		<SubPageLayout title="OUT AUTHORS" subtitle="Incredible people">
			<Head>
				<title>Author list</title>
				<meta name="description" content="Author list" />
			</Head>
		</SubPageLayout>
	);
};

export default AuthorList;
