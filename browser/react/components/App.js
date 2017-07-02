/*
Initially I was loading the next article once the user had scrolled 98% down the current article. But after thinking about it some more, I decided that while I liked that approach for articles that are all about the same length, it would vary the user experience for articles of significantly different lengths. Loading the next article once the user scrolls within a certain distance of the bottom of the page also makes for less complex code.
*/

import React, { Component } from 'react';
import axios from 'axios';

import Articles from './Articles';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allArticles: [],
      currentArticle: 1
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
    const scrollPosition = window.innerHeight + window.pageYOffset,
    loadNextPosition = document.body.offsetHeight - 50;
    // once last article loads, remove event listener
    if (this.state.currentArticle === this.state.allArticles.length) {
      window.removeEventListener('scroll', this.onScroll);
    }
    // once user approaches end of current article, load next article by incrementing currentArticle in state
    if (scrollPosition >= loadNextPosition) {
      this.setState({ currentArticle: this.state.currentArticle + 1 });
    }
  }

  render() {
    // load only the articles up to currentArticle
    const loadedArticles = this.state.allArticles.slice(0, this.state.currentArticle);
    return (
      <Articles articles={loadedArticles} />
    );
  }
}
