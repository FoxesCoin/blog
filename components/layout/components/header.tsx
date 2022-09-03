import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { COLORS } from "@styles/color";

import { PageLink } from "@components/page-link";
import { cssContent, Theme } from "@styles/theme";

const Wrapper = styled.header<{ isSticky: boolean }>`
	padding: 2rem 4rem;
	top: 0;
	position: absolute;
	width: 100%;

	background-color: ${COLORS.transparent};
	transition: all 0.3s;

	&.sticky {
		position: fixed;
		background-color: ${COLORS.black};
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
	const checkScroll = useRef(() => {
		const top = document.documentElement.scrollTop || document.body.scrollTop;

		setIsSticky(!!top);
	});

	useEffect(() => {
		window.addEventListener("scroll", checkScroll.current);

		return () => {
			window.removeEventListener("scroll", checkScroll.current);
		};
	}, []);

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
