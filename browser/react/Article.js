import React, { Component } from 'react';

class Article extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const articles = this.props.articles;
    return (
      <div>
        <div className='text-container' >
          <h1 className='headline dark' >{articles.length && articles[0].title}</h1>
        </div>
        <div className='featureImage' >
          <img src={articles.length && articles[0].hero.url} alt={articles.length && articles[0].hero.alt} />
        </div>
        <div className='text-container'>
          <div className='body light' dangerouslySetInnerHTML={{__html: articles.length && articles[0].content}} />
        </div>
      </div>
    );
  }
}

// to avoid using dangerouslySetInnerHTML https://github.com/noraesae/react-render-html

export default Article;
