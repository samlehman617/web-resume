import React, { Component } from 'react';
import SkillList from './skill-list.js';

export default class HeaderSectionList extends Component {
  renderSection(section) {
    return (
      <span>Section</span>
    );
  }
  renderSkills(item) {
    return (
        <SkillList
            title={item.title}
            skills={item.skills} />
    );
  }

  render() {
    const sections = this.props.sections;
    const last = sections[sections.length - 1];
    console.log("Last: ", last);
    if(last.type == "skill") {
        console.log(last);
    }
    return (
      <div className="sections">
        {this.props.sections.map(this.renderSection)}
        <div> {last.items.map(this.renderSkills)} </div>
      </div>
    );
  }
}
