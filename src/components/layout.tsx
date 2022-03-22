import React, { ReactNode, FC } from 'react';
import ChuckLogo from '../assets/chuck.jpeg';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="layout min-h-screen w-screen flex flex-col items-center pt-10">
      <img src={ChuckLogo} alt="chuck" className="logo" />
      {children}
    </div>
  );
};

export default Layout;
