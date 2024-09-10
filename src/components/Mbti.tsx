import { useState } from 'react';

import {
  CardBack,
  CardFront,
  MbtiCard,
  MbtiCardContainer,
  MbtiCardWrapper,
} from '../styles/mbti.styled';
interface MbtiCardProps {
  trait: string;
}
import { MbtiText } from '../styles/text.styled';
const MbtiCardWithContent = ({ trait }: MbtiCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <MbtiCardContainer
      isFlipped={isFlipped}
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
    >
      <MbtiCard>
        <CardFront>?</CardFront>

        <CardBack>{trait}</CardBack>
      </MbtiCard>
    </MbtiCardContainer>
  );
};

export function MbtiGrid() {
  const traits = [
    { trait: 'E' },
    { trait: 'S' },
    { trait: 'T' },
    { trait: 'P' },
  ];

  return (
    <>
      <MbtiText>저의 MBTI 는 바로 바로</MbtiText>
      <MbtiCardWrapper>
        {traits.map(({ trait }) => (
          <MbtiCardWithContent key={trait} trait={trait} />
        ))}
      </MbtiCardWrapper>
    </>
  );
}
