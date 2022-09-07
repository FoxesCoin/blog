import styled from 'styled-components';

import { Layout } from './layout';
import { SubPageHeader, SubPageHeaderProps } from './sub-page-header';

import { cssContent } from '@styles/theme';

import { RWrapper } from '@typings/react';

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  row-gap: 2rem;
`;

const Content = styled.main`
  ${cssContent}
`;

export const SubPageLayout: RWrapper<SubPageHeaderProps> = (props) => {
  const { className, children, subtitle, title } = props;

  return (
    <StyledLayout>
      <SubPageHeader title={title} subtitle={subtitle} />
      <Content className={className}>{children}</Content>
    </StyledLayout>
  );
};
