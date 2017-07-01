import React from 'react';

const Body = props => {
  // if article has even index, use light color scheme; if odd, use dark
  const colorScheme = props.idx % 2 === 0 ? 'light' : 'dark';
  const bodyClass = `body ${colorScheme}`;

  return (
    <div className='text-container'>
      <div className={bodyClass} dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  );
}

export default Body;
