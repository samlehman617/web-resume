import React, { Component } from 'react';
import SectionList from './section-list';

class Content extends Component {
  onNewComment(comment) {
    console.log(comment);
  }

  render() {
    const sections = this.props.data.sections;

    console.log(sections);
    console.log("Rending content...");
    return (
      <div className="content">
        <SectionList sections={sections} />
      </div>
    );
  }
}

export default Content;
