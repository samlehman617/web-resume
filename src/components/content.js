import React, { Component } from 'react';
import SectionList from './section-list';
// import Disqus from './disqus';

class Content extends Component {
  onNewComment(comment) {
    console.log(comment);
  }

  render() {
    const sections = this.props.data.sections;
    // const disqus = this.props.config.disqus || {};

    console.log("Rending content...");
    return (
      <div className="content">
        <SectionList sections={sections} />
      </div>
    );
  }
}

export default Content;
