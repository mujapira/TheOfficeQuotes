import styled from "styled-components";
import michaelImg from "../../images/michael.png";
import { Quotes } from '../../components/quotes/Quotes.js';

export function App() {
  return (
    <Content>
      <Quotes quote={'ok'} speaker={'speaker'}/>
      <MichaelImg src={michaelImg} alt="Michael Scott with funny face" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MichaelImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;