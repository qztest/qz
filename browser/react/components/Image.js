import React from 'react';

const Image = props => {
  const colorScheme = props.idx % 2 === 0 ? 'dark-to-light' : 'light-to-dark';
  const imageClass = `feature-image ${colorScheme}`

  return (
    <div className={imageClass} >
      <img src={props.url} alt={props.alt} />
    </div>
  );
}

export default Image;
