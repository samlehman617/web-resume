import React, { Component } from 'react';

export default class Profile extends Component {
  getFullName() {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  render() {
    return (
      <div className="profile">
        <img
          className="profile-img"
          src={require('../img/sam-transparent.png')}
          alt={this.getFullName()} />
        <h1 className="name">{this.props.firstName} <em>{this.props.lastName}</em></h1>
        <h3 className="position">{this.props.position}</h3>
      </div>
    );
  }
}
