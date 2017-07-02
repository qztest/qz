import React from 'react';

const Headline = props => {
  // if article has even index, use dark color scheme; if odd, use light
  const colorScheme = props.idx % 2 === 0 ? 'dark' : 'light',
  headline = props.headline.replace(/&#8217;/g, "'");

  return (
    <div className='text-container' >
      <h2 className={`headline ${colorScheme}`} >{headline}</h2>
    </div>
  );
}

export default Headline;
