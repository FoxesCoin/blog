import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@styles/color';

import { cssTypography, Typography } from '@styles/theme';
import { RElement } from '@typings/react';

interface Props extends Typography {
  href: string;
  text: string;
}

const Text = styled.span<Typography>`
  transition: all 0.2s;
  cursor: pointer;

  ${cssTypography}

  &:hover {
    color: ${COLORS.camel};
  }
`;

export const StyledLink: RElement<Props> = (props) => {
  const {
    className,
    href,
    text,
    fontSize = 'small',
    fontFamily,
    color,
  } = props;

  return (
    <Link href={href}>
      <Text
        className={className}
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={color}
      >
        {text}
      </Text>
    </Link>
  );
};
