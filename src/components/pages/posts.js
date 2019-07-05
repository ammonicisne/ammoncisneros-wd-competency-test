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

    this.Filter = this.Filter.bind(this);
  }

  Filter(filter) {
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


  Items() {
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
        <div className="items-wrapper">
            <div className="filter-links">
                <button className="btn" onClick={() => this.Filter("Trucks")}>
                Latest on our Trucks
                </button>
                <button className="btn" onClick={() => this.Filter("Hydrogen")}>
                Stay up to date with our Hydrogen
                </button>
                <button className="btn" onClick={() => this.Filter("PowerSports")}>
                Latest on our PowerSports
                </button>
            </div>
            <div className="items-wrapper">{this.Items()}</div>
         </div>
    );
  }
}