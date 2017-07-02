import React from 'react';

const Image = props => {
  // set direction of gradient based on even/odd index
  const colorScheme = props.idx % 2 === 0 ? 'dark-to-light' : 'light-to-dark';

  return (
    <div className={`feature-image ${colorScheme}`} >
      <img src={props.url} alt={props.alt} />
    </div>
  );
}

export default Image;
