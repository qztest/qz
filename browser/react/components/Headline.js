import React from 'react';

const Headline = props => {
  // if article has even index, use dark color scheme; if odd, use light
  const colorScheme = props.idx % 2 === 0 ? 'dark' : 'light';
  const headlineClass = `headline ${colorScheme}`;

  return (
    <div className='text-container' >
      <h2 className={headlineClass} >{props.headline.replace(/&#8217;/g, "'")}</h2>
    </div>
  );
}

export default Headline;
