import React from 'react';

const Articles = props => {
  // setting each article's div id to its index in the articles array allows App component to calculate height of current article
  return (
    <div>
      {props.articles.map((article, i) =>
        <div id={i} key={article.id} >
          <div className='text-container' >
            <h1 className='headline dark' >{article.title}</h1>
          </div>
          <div className='feature-image' >
            <img src={article.hero.url} alt={article.hero.alt} />
          </div>
          <div className='text-container'>
            <div className='body light' dangerouslySetInnerHTML={{__html: article.content}} />
          </div>
        </div>
      )}
    </div>
  );
}

// to avoid using dangerouslySetInnerHTML https://github.com/noraesae/react-render-html

export default Articles;
