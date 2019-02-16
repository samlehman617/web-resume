import React, { Component } from 'react';
import SkillItem from './skill-item.js';

class SkillList extends Component {
  renderSkill(skill) {
    var icon;
    if (!skill.icon || 0 === skill.icon.length) {
      icon = "devicon-"+skill.name.toLowerCase()+"-plain";
    } else {
      icon = skill.icon;
    }
    console.log("Icon: "+icon);
    return (
      <SkillItem 
        name={skill.name}
        icon={icon} />
    );
  }
  
  render() {
    // const title = this.props.title || '';
    // const skills = this.props.skills || [];
    return (
      <div className="skill-list">
        <div className="title">{this.props.title}: </div>
        <div className="skill-items">{this.props.skills.map(this.renderSkill)}</div>
      </div>
    );
  }
}
export default SkillList;
