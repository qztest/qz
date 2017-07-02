import React from 'react';

import Headline from './Headline';
import Image from './Image';
import Body from './Body';

const Articles = props => {
  // setting each article's div id to its index allows App component to calculate height of current article
  return (
    <div>
      {props.articles.map((article, i) =>
        <div id={i} key={article.id} >
          <Headline headline={article.title} idx={i} />
          <Image url={article.hero.url} alt={article.hero.alt} idx={i} />
          <Body content={article.content} idx={i} />
        </div>
      )}
    </div>
  );
}

export default Articles;
