import Link from 'next/link';
import styled, { css } from 'styled-components';

import { COLORS } from '@styles/color';

import { cssRound, Theme } from '@styles/theme';

import type { RElement } from '@typings/react';
import type { ResponseAuthor } from '@utils/api';

interface Props extends ResponseAuthor {
  isAbsolutePosition?: boolean;
}

const Wrapper = styled.div<{ isAbsolute: boolean }>`
  ${(props) =>
    props.isAbsolute
      ? css`
          position: absolute;
          bottom: 1rem;
          left: 1rem;
        `
      : ''}

  &:hover {
    color: ${COLORS.camel};
  }
`;

const Logo = styled.div<{ src: string }>`
  ${cssRound(40)}
  transition: all 0.3s;
  background-color: ${COLORS.white};
  background-image: url(${(props) => props.src});
  background-size: contain;
`;

const Text = styled(Theme.Text)`
  transition: 0.2s all;
`;

export const AuthorLink: RElement<Props> = (props) => {
  const { className, logo, fullName, id, isAbsolutePosition } = props;

  return (
    <Link href={`/posts?author=${id}`}>
      <Wrapper isAbsolute={!!isAbsolutePosition} className={className}>
        <Theme.GapRow>
          <Logo src={logo} />
          <Text fontFamily="thin" fontSize="small">
            {fullName}
          </Text>
        </Theme.GapRow>
      </Wrapper>
    </Link>
  );
};
