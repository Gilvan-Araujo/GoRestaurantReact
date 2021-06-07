import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  background-color: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;

  @media(min-width: 720px){
    padding: 24px;
    width: 700px;
  }
`;
