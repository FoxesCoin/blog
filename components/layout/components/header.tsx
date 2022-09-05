import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { StyledLink } from "@components/styled-link";

import { COLORS } from "@styles/color";
import { Z_INDEX } from "@styles/z-index";

import { cssContent, Theme } from "@styles/theme";

const Wrapper = styled.header<{ isSticky: boolean }>`
	top: 0;
	position: absolute;
	width: 100%;

	background-color: ${COLORS.transparent};
	transition: all 0.3s;

	padding-top: 2rem;
	padding-bottom: 2rem;
	z-index: ${Z_INDEX.topBar};

	&.sticky {
		position: fixed;
		background-color: ${COLORS.deepBlack};
		padding-top: 1rem;
		padding-bottom: 1rem;
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
				<StyledLink href="/" text="BLOG" fontSize="header" />
				<Theme.GapRow gap={32}>
					<StyledLink href="/about-us" text="ABOUT US" />
					<StyledLink href="/author-list" text="AUTHOR LIST" />
					<StyledLink href="/tag-list" text="TAG LIST" />
				</Theme.GapRow>
			</Content>
		</Wrapper>
	);
};
