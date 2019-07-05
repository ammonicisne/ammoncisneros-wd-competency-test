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
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={
            "img-background " + this.state.ItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}