import React from 'react';

interface Tab3Props {
  name: string;
}

const Tab3: React.FC<Tab3Props> = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Tab3;
