import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemClass: ""
    };
  }

  render() {
    const { description, url, name } = this.props.item;
    return (
        <div className="article-text-wrapper">
          <div className="subtitle">
          <div className="subName">{name}</div></div>
          <div className="subtitle">{description}</div>
          <a href={url}>
            <div className="subtitle">
              <div className="subUrl">
                {url}
              </div>
            </div>
          </a>
        </div>
    );
  }
}