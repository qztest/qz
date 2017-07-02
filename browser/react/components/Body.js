import React from 'react';
import renderHTML from 'react-render-html';

const Body = props => {
  // if article has even index, use light color scheme; if odd, use dark
  const colorScheme = props.idx % 2 === 0 ? 'light' : 'dark';

  return (
    <div className='text-container' >
      <div className={`body ${colorScheme}`} >
        {renderHTML(props.content)}
      </div>
    </div>
  );
}

export default Body;
