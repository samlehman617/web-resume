import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    console.log("Name: " + this.props.name);
    console.log("Icon: " + this.props.icon);
    return (
      <div className="item item-skill"><i className={this.props.icon}></i>    {this.props.name}</div>
    );
  }
}

export default SkillItem;
