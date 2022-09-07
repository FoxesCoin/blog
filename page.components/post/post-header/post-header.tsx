import differenceInMinutes from "date-fns/differenceInMinutes";
import format from "date-fns/format";

import { AuthorLink } from "@components/author-link";
import { TagLink } from "@components/tag-link";

import { PostHeaderStyled as Styled } from "./post-header.styled";

import { Theme } from "@styles/theme";
import type { ResponseArticle } from "@utils/api";

type Props = Pick<
	ResponseArticle,
	"tag" | "title" | "subtitle" | "dateCreate" | "author"
>;

const HOURS = 60;
const DAY = HOURS * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const getTimeMessage = (dateString: string) => {
	const date = new Date(dateString);
	const minutes = differenceInMinutes(new Date(), date);

	switch (true) {
		case minutes < HOURS:
			return `${minutes} minutes ago`;
		case minutes < DAY:
			return `${(minutes / HOURS).toFixed()} hours ago`;
		case minutes < MONTH:
			return `${(minutes / DAY).toFixed()} day ago`;
		case minutes < YEAR:
			return `${(minutes / MONTH).toFixed()} month ago`;
		default:
			return format(date, "dd MMMM yyyy");
	}
};

export const PostHeader = (props: Props) => {
	const { dateCreate, subtitle, tag, title, author } = props;

	return (
		<Styled.Wrapper>
			<Theme.FlexLine>
				<Theme.GapColumn>
					<Styled.Title>{title}</Styled.Title>
					<TagLink {...tag} />
				</Theme.GapColumn>
				<Styled.Subtitle>{subtitle}</Styled.Subtitle>
			</Theme.FlexLine>
			<Styled.AdditionalInfo>
				<AuthorLink {...author} />
				<Styled.Date>{getTimeMessage(dateCreate)}</Styled.Date>
			</Styled.AdditionalInfo>
		</Styled.Wrapper>
	);
};
