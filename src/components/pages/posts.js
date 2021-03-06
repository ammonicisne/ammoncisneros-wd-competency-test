import React, { Component } from "react";
import axios from "axios";

import Item from "../items/item";

export default class ItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Welcome",
      isLoading: false,
      data: []
    };

    this.filter = this.filter.bind(this);
  }

  filter(filter) {
    if (filter === "CLEAR_FILTERS") {
        this.getItems();
      } else {
        this.getItems(filter);
      }
  }

  getItems(filter = null) {
    axios
      .get("https://ammonicisneros.devcamp.space/portfolio/portfolio_items")
      .then(response => {
          if (filter) {
        this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


  items() {
    return this.state.data.map(item => {
        return <Item key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="index-items-wrapper">
            <div className="filter-links">
                <button className="btn" onClick={() => this.filter("Trucks")}>
                LATEST ON OUR TRUCKS
                </button>
                <button className="btn" onClick={() => this.filter("Hydrogen")}>
                STAY UP TO DATE WITH OUR HYDROGEN
                </button>
                <button className="btn" onClick={() => this.filter("PowerSports")}>
                LATEST ON OUR POWERSPORTS
                </button>
            </div>
            <div className="single-items-wrapper">{this.items()}
            </div>
         </div>
    );
  }
}