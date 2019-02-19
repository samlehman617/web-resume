import React, { Component } from 'react';
import Section from './section';

export default class SectionList extends Component {
  renderSection(section) {
    console.log("Rendering section: " + section);
    return (
      <Section
        key={section.title}
        title={section.title}
        description={section.description}
        type={section.type}
        items={section.items} />
    );
  }

  render() {
    console.log("Sections"+ this.props.sections);
    const sections = this.props.sections || [];

    return (
      <div className="sections">
        {sections.map(this.renderSection)}
      </div>
    );
  }
}
