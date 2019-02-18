import React, { Component } from 'react';

export default class Profile extends Component {
  getFullName() {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  render() {
    const sam = "https://raw.githubusercontent.com/samlehman617/web-resume/master/src/img/sam-transparent.png";
    return (
      <div className="profile">
        <img
          className="profile-img"
          src={sam}
          alt={this.getFullName()} />
        <h1 className="name">{this.props.firstName} <em>{this.props.lastName}</em></h1>
        <h3 className="position">{this.props.position}</h3>
      </div>
    );
  }
}
