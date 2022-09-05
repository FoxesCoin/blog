import { useCallback, useEffect, useState } from "react";

import { StyledLink } from "@components/styled-link";
import { SearchModal } from "../search-modal";

import { closeModal, openModal } from "@utils/modal";

import { Theme } from "@styles/theme";
import Search from "public/image/search.svg";

import { HeaderStyled as Styled } from "./header.styled";

export const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
	const checkScroll = useCallback(() => {
		const top = document.documentElement.scrollTop || document.body.scrollTop;

		setIsSticky(!!top);
	}, []);

	const openSearchModal = useCallback(() => {
		openModal(() => {
			setIsOpenSearchModal(true);
		});
	}, []);
	const closeSearchModal = useCallback(() => {
		closeModal(() => {
			setIsOpenSearchModal(false);
		});
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, [checkScroll]);

	return (
		<Styled.Wrapper className={isSticky ? "sticky" : ""} isSticky={isSticky}>
			<Styled.Content>
				<StyledLink href="/" text="BLOG" fontSize="header" />
				<Theme.GapRow gap={32}>
					<StyledLink href="/about-us" text="ABOUT US" />
					<StyledLink href="/author-list" text="AUTHOR LIST" />
					<StyledLink href="/tag-list" text="TAG LIST" />
					<Styled.SearchButton onClick={openSearchModal}>
						<Search />
					</Styled.SearchButton>
				</Theme.GapRow>
			</Styled.Content>
			<SearchModal closeModal={closeSearchModal} isOpen={isOpenSearchModal} />
		</Styled.Wrapper>
	);
};
