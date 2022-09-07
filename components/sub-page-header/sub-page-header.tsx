import { RElement } from '@typings/react';

import { SubPageHeaderStyled as Styled } from './sub-page-header.styled';

export interface SubPageHeaderProps {
  title: string;
  subtitle: string;
}

export const SubPageHeader: RElement<SubPageHeaderProps> = (props) => {
  const { className, subtitle, title } = props;

  return (
    <Styled.Wrapper className={className}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Wrapper>
  );
};
