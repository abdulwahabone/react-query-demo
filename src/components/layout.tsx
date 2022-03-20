import React from 'react';
import ChuckLogo from '../assets/chuck.jpeg';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout min-h-screen w-screen flex flex-col  items-center pt-10">
      <img src={ChuckLogo} alt="chuck" className="logo" />
      {children}
    </div>
  );
}
