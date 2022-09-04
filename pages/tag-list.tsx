import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { SubPageLayout } from "@components/sub-page-layout";
import { Tag } from "@components/tag";

import { getTags } from "@utils/api";

import { cssContent } from "@styles/theme";

import type { Tag as TagData } from "@utils/api/tag";

interface Props {
	tags: TagData[];
}

const Tags = styled.main`
	display: grid;
	row-gap: 3rem;
	column-gap: 2rem;
	grid-template-columns: repeat(auto-fit, 300px);
	grid-auto-rows: 300px;
	justify-content: center;

	${cssContent}
`;

const TagList: NextPage<Props> = (props) => {
	const { tags } = props;
	return (
		<SubPageLayout
			title="CATEGORIES"
			subtitle="Maybe you search for something specific?"
		>
			<Head>
				<title>Tag list</title>
				<meta name="description" content="Tag list" />
			</Head>
			<Tags>
				{tags.map((tag) => (
					<Tag key={tag.id} {...tag} />
				))}
			</Tags>
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
