import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dwightImg from "../../images/dwight.png";
import officeSound from '../../sounds/office.mp3';
import { Quotes } from '../../components/quotes/Quotes';
import { getQuote } from '../../services';

const audio = new Audio(officeSound);

export function App() {
  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuote(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate}/>
      <DwightImg src={dwightImg} alt="Dwight standing" />
    </Content>
  );
}

const Content = styled.div`
height: 100vh;
box-sizing: border-box;
padding: 0 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const DwightImg = styled.img`
  max-width: 35vw;
  align-self: flex-end;
`;