import React, { Component } from 'react';

class SkillItem extends Component {
  constructor(...args) {
    super(...args);
    this.renderSkills = this.renderSkills.bind(this);
  }
  
  renderSkills() {
    const skills = this.props.skills;
    return (
      <span><ul className="skill-list">
        {skills.map((skill) => {
          const ic = 'devicon-' + skill.toLowerCase() + '-plain';
          // switch(skill) {
          //   case 'English':
          //     const ic="fa-commenting-o";
          //     break;
          //   case 'Spanish':
          //     const ic="fa-commenting";
          //     break;
          return <li className="skill-list-item"><span><i class={ic}></i> {skill}  </span></li>;
        })}
      </ul></span>
    );
  }

  render() {
    const skills = this.props.skills;

    return (
      <li className="item item-skill">
        <span className="title">{this.props.title}: {skills && this.renderSkills()}</span>
      </li>
    );
  }
}

export default SkillItem;
