import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { PageLink } from "@components/page-link";

import { COLORS } from "@styles/color";

import { cssContent, Theme } from "@styles/theme";

const Wrapper = styled.header<{ isSticky: boolean }>`
	top: 0;
	position: absolute;
	width: 100%;

	background-color: ${COLORS.transparent};
	transition: all 0.3s;

	padding: 2rem 0;

	&.sticky {
		position: fixed;
		background-color: ${COLORS.black};
		padding: 1rem 0;
	}
`;

const Content = styled.div`
	display: flex;

	justify-content: space-between;

	${cssContent}
`;

export const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const checkScroll = useCallback(() => {
		const top = document.documentElement.scrollTop || document.body.scrollTop;

		setIsSticky(!!top);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, [checkScroll]);

	return (
		<Wrapper className={isSticky ? "sticky" : ""} isSticky={isSticky}>
			<Content>
				<PageLink href="/" text="BLOG" fontSize="header" />
				<Theme.GapRow gap={32}>
					<PageLink href="/about-us" text="ABOUT US" />
					<PageLink href="/author-list" text="AUTHOR LIST" />
					<PageLink href="/tag-list" text="TAG LIST" />
				</Theme.GapRow>
			</Content>
		</Wrapper>
	);
};
