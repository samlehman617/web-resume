import React, { Component } from 'react';

class DetailItem extends Component {
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
    console.log("Img: " + this.props.image);
    const img_url = "https://raw.githubusercontent.com/samlehman617/web-resume/master/" + this.props.image;
    return (
      <div className="item item-detail">
        <div className="info">
          <div className="image"><img className="image" src={img_url}/></div>
          <span className="title">{this.props.title}</span>
          <span className="organization"><small>{this.props.organization}</small></span>
          <span className="location"><i>{this.props.location}</i></span>
          <span className="date"><small>{this.props.date}</small></span>
        </div>
        {descriptions && this.renderDescriptions()}
      </div>
    );
  }
}

export default DetailItem;
