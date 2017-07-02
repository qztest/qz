import React, { Component } from 'react';
import axios from 'axios';

import Articles from './Articles';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allArticles: [],
      currentArticleIdx: 0,
      currentArticleTop: 0
    };
    this.loadArticles = this.loadArticles.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.loadArticles();
    window.addEventListener('scroll', this.onScroll);
  }

  loadArticles() {
    axios.get('api/articles')
      .then(res => this.setState({ allArticles: res.data.items }))
      .catch(err => console.error(err))
  }

  onScroll() {
    const currentArticleHeight = document.getElementById(this.state.currentArticleIdx).scrollHeight,
    currentArticleBottom = this.state.currentArticleTop + currentArticleHeight,
    scrollPosition = window.innerHeight + window.pageYOffset,
    loadNextPosition = this.state.currentArticleTop + currentArticleHeight * 0.98,
    nextIdx = this.state.currentArticleIdx + 1;
    // once last article loads, remove event listener
    if (nextIdx === this.state.allArticles.length) {
      window.removeEventListener('scroll', this.onScroll);
    }
    // once user has scrolled 98% down current article, load next article by incrementing currentArticleIdx in state
    if (scrollPosition >= loadNextPosition) {
      this.setState({
        currentArticleIdx: nextIdx,
        currentArticleTop: currentArticleBottom
      });
    }
  }

  render() {
    const loadedArticles = this.state.allArticles.slice(0, this.state.currentArticleIdx + 1);
    return (
      <Articles articles={loadedArticles} />
    );
  }
}
