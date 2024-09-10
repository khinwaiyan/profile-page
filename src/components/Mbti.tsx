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
    <MbtiCardWrapper>
      {traits.map(({ trait }) => (
        <MbtiCardWithContent key={trait} trait={trait} />
      ))}
    </MbtiCardWrapper>
  );
}
