import React, { Component } from 'react';
import SimpleItem from './simple-item';
import DetailItem from './detail-item';
import GithubItem from './github-item';
import SkillList from './skill-list.js';
import EducationItem from './education-item.js';

export default class ItemList extends Component {
  constructor(...args) {
    super(...args);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    console.log(this.props.type);
    switch (this.props.type) {
    case 'simple':
      return (
        <SimpleItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date} />
      );
    case 'detail':
      return (
        <DetailItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date}
          image={item.image}
          descriptions={item.descriptions} />
      );
    case 'github':
      return (
        <GithubItem
          repository={item.repository}
          title={item.title}
          description={item.description} />
      );
    case 'skill':
      console.log("Skill");
      return (
        <SkillList
          title={item.title}
          skills={item.skills} />
      ); 
    case 'education':
      return (
        <EducationItem
          school={item.school}
          degree={item.degree}
          location={item.location}
          date={item.date}
          description={item.descriptions} />
      );
    }
  }

  render() {
    console.log("Rendering list");
    const type = this.props.type;
    const items = this.props.items || [];

    return (
      <div className="items">
        {items.map(this.renderItem)}
      </div>
    );
  }
}
