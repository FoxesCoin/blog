import { StyledLink } from "@components/styled-link";

import type { RElement } from "@typings/react";
import type { ResponseTag } from "@utils/api";

export const ArticleTagLink: RElement<ResponseTag> = (props) => {
	const { className, id, name } = props;

	return (
		<StyledLink href={`/posts?tag=${id}`} text={name} className={className} />
	);
};
