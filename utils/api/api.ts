import { ARTICLES } from "./article";
import { AUTHORS } from "./author";
import { TAGS } from "./tag";

export interface ResponseArticle {
	id: number;
	tag: string;
	author: string;

	title: string;
	subtitle: string;
	content: string;
	dateCreate: string;
}

export const getArticles = async () => {
	const articles = ARTICLES.map<ResponseArticle>(
		({ idAuthor, idTag, ...article }) => {
			const author = AUTHORS.find(({ id }) => id === idAuthor)!;
			const tag = TAGS.find(({ id }) => id === idTag)?.name!;
			return {
				...article,
				tag,
				author: `${author.name} ${author.surname}`,
			};
		}
	);

	return articles;
};

export const getTags = async () => TAGS;
export const getAuthors = async () => AUTHORS;
