import Image from 'next/image';

import { Theme } from '@styles/theme';

interface Props {
  counter: number;
}

export const PostCounter = (props: Props) => {
  const { counter } = props;

  return (
    <Theme.GapRow>
      <Image src="/image/pencil.png" alt="pencil" width={18} height={18} />

      <Theme.Text>
        {counter} POST{counter > 1 ? 'S' : ''}
      </Theme.Text>
    </Theme.GapRow>
  );
};
