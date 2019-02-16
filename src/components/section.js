import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from './item-list';


class Section extends Component {
  renderTitle() {
    const isAwesome = true;
    const title = this.props.title;

    return isAwesome ? (
      <h1 className="section-title">
        <em>{title.slice(0, 3)}</em>{title.slice(3)}
      </h1>
    ) : (
      <h1 className="section-title">title</h1>
    );

  }

  renderDescription() {
    const description = this.props.description;

    if (description != null)
      return (
        <p className="section-description">{description}</p>
      );
  }

  renderItems() {
    const items = this.props.items;
    const type = this.props.type;

    if (items != null)
      return (
        <ItemList type={type} items={items} />
      );
  }

  render() {
    const title = this.props.title;

    return (
      <section id={_.kebabCase(title)} className="section">
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderItems()}
      </section>
    );
  }
}

Section.protoTypes = {
  // title: React.PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  items: PropTypes.array
};

export default Section;
