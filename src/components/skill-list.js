import React, { Component } from 'react';
import SkillBar from 'react-skillbars';
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
        name={skill.type}
        icon={icon} />
    );
  }
  
  render() {
    console.log("Rendering skill-lists")
    // const title = this.props.title || '';
    // const skills = this.props.skills || [];
    return (
      //<SkillList skills={} />
      //<div className="skill-items">{this.props.skills.map(this.renderSkill)}</div>
      <div className="skill-list">
        <div className="title">{this.props.title}: </div>
        <SkillBar skills={this.props.skills} />
      </div>
    );
  }
}
export default SkillList;
