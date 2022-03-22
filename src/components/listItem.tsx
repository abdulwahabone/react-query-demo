import React, { FC } from 'react';

interface IListItem {
  text: string;
  key: number;
}

const ListItem: FC<IListItem> = ({ text, key }) => {
  return (
    <div
      key={key}
      className="sm:text-xl text-lg sm:w-1/2 mx-5 px-3 list_item mb-6 p-2 rounded drop-shadow-lg"
    >
      {text}
    </div>
  );
};

export default ListItem;
