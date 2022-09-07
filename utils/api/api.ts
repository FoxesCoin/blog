import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';

import { ArticleData, ARTICLES } from './article';
import { AUTHORS } from './author';
import { TAGS } from './tag';

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
  background: string;
}

const formatArticle = ({
  idAuthor,
  idTag,
  ...article
}: ArticleData): ResponseArticle => {
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
};

const sortByTimeArticles = <T extends { dateCreate: string }>(
  first: T,
  second: T
) =>
  differenceInMilliseconds(
    new Date(second.dateCreate),
    new Date(first.dateCreate)
  );

export const getArticles = async () =>
  ARTICLES.map<ResponseArticle>(formatArticle).sort(sortByTimeArticles);

export const getTopArticles = async () =>
  ARTICLES.sort(sortByTimeArticles)
    .slice(0, 3)
    .map<ResponseArticle>(formatArticle);

export const getAllArticlesId = async () =>
  ARTICLES.map(({ id }) => ({ params: { id: id + '' } }));

export const getArticleById = async (idArticle: number) =>
  formatArticle(ARTICLES.find(({ id }) => id === idArticle)!);

export const getArticleByAuthor = async (id: number) =>
  ARTICLES.filter(({ idAuthor }) => idAuthor === id).map(formatArticle);

export const getArticleByTag = async (id: number) =>
  ARTICLES.filter(({ idTag }) => idTag === id).map(formatArticle);

export const searchArticles = async (search: string) => {
  const articles = await getArticles();

  return articles.filter((article) =>
    article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
};

export const getTags = async () => TAGS;
export const getTagById = async (idTag: number) =>
  TAGS.find(({ id }) => id === idTag)!;

export const getAuthors = async () => AUTHORS;
export const getAuthorById = async (idAuthor: number) =>
  AUTHORS.find(({ id }) => id === idAuthor)!;
