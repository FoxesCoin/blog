import { StyledLink } from '@components/styled-link';

import type { RElement } from '@typings/react';
import type { ResponseTag } from '@utils/api';

export const TagLink: RElement<ResponseTag> = (props) => {
  const { className, id, name } = props;

  return (
    <StyledLink
      href={`/posts?tag=${id}`}
      fontFamily="thin"
      text={name}
      className={className}
    />
  );
};
