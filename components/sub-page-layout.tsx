import styled from 'styled-components';

import { Layout } from './layout';
import { SubPageHeader, SubPageHeaderProps } from './sub-page-header';

import { cssBackground, cssContent } from '@styles/theme';

import { RWrapper } from '@typings/react';

interface Props extends SubPageHeaderProps {
  background: string;
}

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  row-gap: 2rem;
`;

const Content = styled.main`
  ${cssContent}
`;

const BackgroundImage = styled.div`
  ${cssBackground}
`;

export const SubPageLayout: RWrapper<Props> = (props) => {
  const { className, children, subtitle, title, background } = props;

  return (
    <StyledLayout>
      <BackgroundImage src={background}>
        <SubPageHeader title={title} subtitle={subtitle} />
      </BackgroundImage>
      <Content className={className}>{children}</Content>
    </StyledLayout>
  );
};
