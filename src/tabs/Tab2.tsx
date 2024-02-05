import React from 'react';

interface Tab2Props {
  name: string;
}

const Tab2: React.FC<Tab2Props> = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Tab2;
