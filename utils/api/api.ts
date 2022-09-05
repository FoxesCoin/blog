import differenceInMilliseconds from "date-fns/differenceInMilliseconds";

import { ARTICLES } from "./article";
import { AUTHORS } from "./author";
import { TAGS } from "./tag";

export interface ResponseAuthor {
	id: number;
	fullName: string;
	logo: string;
}

export interface ResponseTag {
	id: number;
	name: string;
}

export interface ResponseArticle {
	id: number;
	tag: ResponseTag;
	author: ResponseAuthor;

	title: string;
	subtitle: string;
	content: string;
	dateCreate: string;
}

export const getArticles = async () => {
	const articles = ARTICLES.map<ResponseArticle>(
		({ idAuthor, idTag, ...article }) => {
			const author = AUTHORS.find(({ id }) => id === idAuthor)!;
			const tag = TAGS.find(({ id }) => id === idTag)!;
			return {
				...article,
				tag: {
					id: tag.id,
					name: tag.name,
				},
				author: {
					id: author.id,
					logo: author.logo,
					fullName: `${author.name} ${author.surname}`,
				},
			};
		}
	).sort((first, second) =>
		differenceInMilliseconds(
			new Date(second.dateCreate),
			new Date(first.dateCreate)
		)
	);

	return articles;
};

export const searchArticles = async (search: string) => {
	const articles = await getArticles();

	return articles.filter((article) =>
		article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	);
};

export const getTags = async () => TAGS;
export const getAuthors = async () => AUTHORS;
