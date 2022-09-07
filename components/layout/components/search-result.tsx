import format from 'date-fns/format';
import Link from 'next/link';

import { COLORS } from '@styles/color';
import { Theme } from '@styles/theme';
import styled from 'styled-components';

interface Props {
  id: number;
  title: string;
  dateCreate: string;
}

const Wrapper = styled(Theme.GapRow)`
  padding: 1.5rem 0;
  align-items: center;
  border-top: 2px solid ${COLORS.camel};

  &:last-child {
    border-bottom: 2px solid ${COLORS.camel};
  }
`;

export const SearchResult = (props: Props) => {
  const { id, dateCreate, title } = props;

  const time = format(new Date(dateCreate), 'd MMMM yyyy');

  return (
    <Link href={`/posts/${id}`}>
      <Wrapper>
        <Theme.Text fontSize="header">{title}</Theme.Text>
        <Theme.Text fontSize="small" color="onyx">
          {time}
        </Theme.Text>
      </Wrapper>
    </Link>
  );
};
