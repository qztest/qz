import React, { Component } from 'react';
import axios from 'axios';

import Article from './Article';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    axios.get('api/articles')
    .then(articles => this.setState({ articles: articles.data.items }))
    .catch(err => console.error(err))
  }
  render() {
    return (
      <Article articles={this.state.articles} />
    );
  }
}

export default App;
