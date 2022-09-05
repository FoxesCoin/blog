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
	);

	return articles;
};

export const getTags = async () => TAGS;
export const getAuthors = async () => AUTHORS;
