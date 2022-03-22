import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ISubNav {
  label: string;
  to: string;
}

const SubNav: FC<ISubNav> = ({ label, to }) => {
  return (
    <Link
      to={to}
      className="rounded-full my-3 text-xs text-slate-600 drop-shadow-md"
    >
      {label}
    </Link>
  );
};

export default SubNav;
