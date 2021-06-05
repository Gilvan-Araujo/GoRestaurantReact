import styled, { css } from 'styled-components';

type ContainerProps = {
  available: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #1A202C;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: center;
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;
      user-select: none;
    }
  }
`;
