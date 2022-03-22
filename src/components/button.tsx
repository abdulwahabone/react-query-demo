import React, { FC } from 'react';

interface IButton {
  label: string;
  onClick: React.MouseEventHandler;
}

const Button: FC<IButton> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-amber-600 hover:bg-amber-500 mt-10 px-5 py-3 font-bold text-slate-100 drop-shadow-md"
    >
      {label}
    </button>
  );
};

export default Button;
