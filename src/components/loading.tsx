import React, { FC } from 'react';
import loading from '../assets/loading.gif';

interface ILoading {
  isLoading: boolean;
}

const Loading: FC<ILoading> = ({ isLoading }) => {
  const loadingClass = isLoading ? 'block' : 'hidden';

  return (
    <div className={loadingClass}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
