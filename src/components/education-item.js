import React, { Component } from 'react';

class EducationItem extends Component {
  constructor(...args) {
    super(...args);

    this.renderDescriptions = this.renderDescriptions.bind(this);
  }

  renderDescriptions() {
    const descriptions = this.props.descriptions;

    return (
      <ul className="descriptions">
        {descriptions.map((description) => {
          return <li><span>{description}</span></li>;
        })}
      </ul>
    );
  }

  render() {
    const descriptions = this.props.descriptions;

    return (
      <div className="item item-education">
        <span className="school">{this.props.school}</span>
        <span className="degree"><small>{this.props.degree}</small></span>
        <span className="location"><i>{this.props.location}</i></span>
        <span className="date"><small>{this.props.date}</small></span>
        {descriptions && this.renderDescriptions()}
      </div>
    );
  }
}

export default EducationItem;
