import styled from 'styled-components';

import { FullScreenArticle } from './full-screen-article';

import { COLORS } from '@styles/color';

import type { ResponseArticle } from '@utils/api';

interface Props {
  articles: ResponseArticle[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${COLORS.deepBlack};
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
`;

export const FullScreenPreviewArticle = (props: Props) => {
  const { articles } = props;

  return (
    <Wrapper>
      <Slider>
        {articles.map((article) => (
          <FullScreenArticle key={article.id} {...article} />
        ))}
      </Slider>
    </Wrapper>
  );
};
