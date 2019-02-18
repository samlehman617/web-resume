import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import Content from './content';
import './styles/awesome.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: {},
      config: {}
    }
    console.log("Starting app...");
    this.fetchData();
    this.fetchConfig();

  }

  fetchData() {
    console.log("Fetching data...");
    const json = '/cv.json';
    axios.get(json).then(({data}) => {
      this.setState({data});
    });
  }

  fetchConfig() {
    console.log("Fetching config...");
    const url = '/config.json';
    axios.get(url).then(({data}) => {
      this.setState({config: data});
    });
  }

  render() {
    return (
      <div className="app">
        <Header data={this.state.data} />
        <Content data={this.state.data} config={this.state.config} />
      </div>
    );
  }
}

export default App;
