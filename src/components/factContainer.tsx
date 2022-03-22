import React, { ReactNode, FC } from 'react';

interface IFactContainer {
  children: ReactNode;
}

const FactContainer: FC<IFactContainer> = ({ children }) => {
  return (
    <div className="min-h-[20%] flex justify-center items-center">
      {children}
    </div>
  );
};

export default FactContainer;
