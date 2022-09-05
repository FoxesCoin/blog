import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useState } from "react";

import { Theme } from "@styles/theme";
import { SearchModalStyled as Styled } from "./search-modal.styled";

import { ResponseArticle, searchArticles } from "@utils/api";
import { SearchResult } from "../search-result";

import Cross from "public/image/cross.svg";

interface Props {
	isOpen: boolean;

	closeModal: () => void;
}

export const SearchModal = (props: Props) => {
	const { isOpen, closeModal } = props;
	const [search, setSearch] = useState("");
	const [articles, setArticles] = useState<ResponseArticle[]>([]);

	const handleCloseModal = () => {
		closeModal();
		setSearch("");
		setArticles([]);
	};

	const debounceSearch = debounce(async () => {
		if (!search.trim().length) {
			setArticles([]);
			return;
		}
		const newArticles = await searchArticles(search.trim());

		setArticles(newArticles);
	}, 300);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		setSearch(event.target.value);

	useEffect(() => {
		debounceSearch();
		return () => {
			debounceSearch.cancel();
		};
	}, [search, debounceSearch]);

	return (
		<Styled.Wrapper isOpen={isOpen}>
			<Styled.CloseIcon onClick={handleCloseModal}>
				<Cross />
			</Styled.CloseIcon>
			<Styled.Content>
				<Styled.SearchBar value={search} onChange={handleChange} autoFocus />
				<Styled.SearchResultList>
					{articles.map((article) => (
						<SearchResult
							key={article.id}
							id={article.id}
							title={article.title}
							dateCreate={article.dateCreate}
						/>
					))}
				</Styled.SearchResultList>

				<Theme.Text>Found result: {articles.length}</Theme.Text>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
