import styled from 'styled-components';

import {
  cssFlexCenter,
  cssGap,
  cssTypography,
  Typography,
} from './theme.preset';

const showCursor = (props: any) => (props.onClick ? 'cursor: pointer;' : '');

export const Theme = {
  Paragraph: styled.p<Typography>`
    ${showCursor}
    ${cssTypography}
  `,
  Text: styled.span<Typography>`
    ${showCursor}
    ${cssTypography}
  `,
  Title: styled.p<Typography>`
    ${showCursor}
    ${cssTypography}
    text-align: center;
    width: 100%;
  `,
  FlexLine: styled.div`
    ${showCursor}
    ${cssGap}
		display: flex;
    justify-content: space-between;
  `,
  FlexCentredLine: styled.div`
    ${showCursor}
    ${cssGap}
		display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  FlexColumn: styled.div`
    ${showCursor}
    ${cssGap}
		display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  FlexColumnCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
    flex-direction: column;
  `,

  GapRow: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  FlexCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
  `,
};
