import styled from 'styled-components';

import { COLORS } from '@styles/color';

import { cssBackground, cssRound, cssSquare } from '@styles/theme';

const Logo = styled.div<{ src: string }>`
  ${cssRound(150)}
  transition: all 0.3s;
  position: absolute;
  background-color: ${COLORS.white};
  background-image: url(${(props) => props.src});
  background-size: contain;
  left: 75px;
  top: 25px;
`;

export const AuthorListItemStyled = {
  Logo,
  Content: styled.div`
    height: 200px;
    margin-top: 100px;
    padding: 75px 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s;
  `,
  Wrapper: styled.div`
    position: relative;
    cursor: pointer;

    ${cssBackground}

    ${cssSquare(300)}

    &:hover {
      & ${Logo} {
        box-shadow: 0px 0px 5px 5px ${COLORS.white};
      }

      box-shadow: 0px 0px 10px 5px ${COLORS.deepBlack};
    }
  `,
};
