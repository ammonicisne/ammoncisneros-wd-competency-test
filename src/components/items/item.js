import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ ItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ ItemClass: "" });
  }

  render() {
    const { id, description, url } = this.props.item;
    return (
      <div
        className="item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
          </div>
          <div className="subtitle">{description}</div>
          <a href={url}>
            <div className="subtitle">{url}</div>
          </a>
        </div>
      </div>
    );
  }
}