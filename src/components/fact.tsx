import React, { FC } from 'react';

interface IFact {
  text: string;
  isVisible: boolean;
}

const Fact: FC<IFact> = ({ text, isVisible }) => {
  const visibleClass = isVisible ? 'block' : 'hidden';

  return (
    <div
      className={`facts sm:text-3xl sm:w-1/2 text-lg text-center ${visibleClass}`}
    >
      {text}
    </div>
  );
};

export default Fact;
